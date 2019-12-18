from rest_framework import viewsets, permissions, mixins
from .serializers import ListingInfoSerializer, GeneratedResumeSerializer
from django.template.loader import get_template
from django.template import Context
from subprocess import Popen, PIPE
import tempfile
from .models import GeneratedResume
from django.views.generic import View
import datetime
from listing.pdfutils import render_to_pdf
from django.http import HttpResponse
from rest_framework.decorators import action
from resume.models import BasicInfo, Experience, Education, JobHistory
from django.template.loader import get_template
from subprocess import Popen, PIPE
import os.path
import sys
import io
from reportlab.pdfgen import canvas
from django.views.static import serve
from django.http import FileResponse

# Reportlab stuff
from reportlab.platypus import SimpleDocTemplate, Paragraph, Table, TableStyle
from reportlab.platypus.flowables import Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.rl_config import defaultPageSize
from reportlab.lib.units import inch, cm
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfdoc
from reportlab.pdfbase.pdfmetrics import registerFont, registerFontFamily
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.enums import TA_RIGHT
# Import our font
HEIGHT = 11 * inch
WIDTH = 8.5 * inch
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='Content',
                          fontSize=8,
                          spaceAfter=.1*inch))


class ListingInfoViewSet(viewsets.ModelViewSet):
    serializer_class = ListingInfoSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.listingInfo.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class GeneratedResumeViewSet(viewsets.ModelViewSet):
    serializer_class = GeneratedResumeSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.generatedResume.all()

    @action(detail=False, methods=['GET'], name='Get PDF')
    def add_pdf(self, request):
        basic_info = BasicInfo.objects.get(owner=(self.request.user))

        # a = self.request.user
        a = GeneratedResume.objects.filter(owner=(self.request.user))[0]

        def generate_print_pdf(data, contact):
            pdf_buffer = io.BytesIO()
            doc = SimpleDocTemplate(
                pdf_buffer,
                pagesize=letter,
                bottomMargin=.5 * inch,
                topMargin=.7 * inch,
                rightMargin=.4 * inch,
                leftMargin=.4 * inch)  # set the doc template
            style = styles["Normal"]  # set the style to normal
            story = []  # create a blank story to tell
            contentTable = Table(
                data,
                colWidths=[
                    1.1 * inch,
                    7.2 * inch])
            tblStyle = TableStyle([
                ('TEXTCOLOR', (0, 0), (-1, -1), colors.black),
                ('FONT', (0, 0), (-1, -1), 'Helvetica'),
                ('FONTSIZE', (0, 0), (-1, -1), 15),
                ('VALIGN', (0, 0), (-1, -1), 'TOP'),
                ('ALIGN', (0, 0), (-1, -1), 'LEFT')])
            contentTable.setStyle(tblStyle)
            story.append(contentTable)
            doc.build(
                story,
                onFirstPage=myPageWrapper(
                    contact)
            )
            pdf_buffer.seek(0)
            return pdf_buffer

        def myPageWrapper(contact):
            # template for static, non-flowables, on the first page
            # draws all of the contact information at the top of the page
            def myPage(canvas, doc):
                canvas.saveState()  # save the current state
                # set the font for the name
                canvas.setFont('Helvetica', 18)
                canvas.drawString(
                    .4 * inch,
                    HEIGHT - (.4 * inch),
                    contact['name'])  # draw the name on top left page 1
                canvas.setFont('Helvetica', 10)  # sets the font for contact
                canvas.line(.4 * inch, HEIGHT - (.47 * inch),
                            WIDTH - (.4 * inch), HEIGHT - (.47 * inch))
                canvas.drawRightString(
                    WIDTH - (.4 * inch),
                    HEIGHT - (.6 * inch),
                    contact['email'])
                # restore the state to what it was when saved
                canvas.restoreState()
            return myPage

        contact = {
            'name': a.first_name + " " + a.last_name,
            'email': a.email}
        experienceList = []
        experienceList.append(a.relevantExperience1)
        experienceList.append(a.relevantExperience2)
        experienceList.append(a.relevantExperience3)
        workHistory = []
        workHistory.append(a.relevantJobHistory1)
        workHistory.append(a.relevantJobHistory2)
        workHistory.append(a.relevantJobHistory3)
        data = {
            'education': a.education1,
            'experience': experienceList,
            'work_history': workHistory}
        tblData = [
            ['EDUCATION', Paragraph(data['education'], styles['Content'])],
            ['WORK HISTORY', [Paragraph(x, styles['Content'])
                              for x in data['work_history']]],
            ['EXPERIENCE', [Paragraph(x, styles['Content'])
                            for x in data['experience']]]
        ]
        pdf = generate_print_pdf(tblData, contact)

        ############################################################
        # # Create a file-like buffer to receive PDF data.
        # buffer = io.BytesIO()

        # # Create the PDF object, using the buffer as its "file."
        # p = canvas.Canvas(buffer)

        # # Draw things on the PDF. Here's where the PDF generation happens.
        # # See the ReportLab documentation for the full list of functionality.
        # p.drawString(100, 750, "Hello world.")

        # # Close the PDF object cleanly, and we're done.
        # p.showPage()
        # p.save()

        # FileResponse sets the Content-Disposition header so that browsers
        # present the option to save the file.
        # buffer.seek(0)

        return FileResponse(pdf, as_attachment=True, filename='hello.pdf')

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user,
                        listingID=self.request.data.get('i'))
