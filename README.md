[//]: # (README.md)

[//]: # (Title)
<h1 align="center"> PlugAndPlayResume </h1>
<p align="center"><b> Description</b> </p>
<p align="center">
    PlugAndPlayResume creates resumes optimized for specific job postings.
</p>


[//]: # (Motivation)
## Motivation ##
  <p align="center">In order to make getting your dream job easier, our product
  will solve the job-hunter's problem of resume customization by giving them an
  adaptive webapp to identify their most relevant experience.</p>


[//]: # (Development)
## Development ##

> #### Front-end ####
  > - To get started, open terminal and clone this repository:
  >     ```shell
  >     git clone https://github.com/Tommi-Tsuruga/plug-and-play-resume.git
  >      ```
  > - If you do not have Yarn installed on your machine, it can be installed
  >   easily by following the [official documentation](
  >   https://yarnpkg.com/lang/en/docs/install).
  > - Install the required dependencies by running:
  >     ```shell
  >     cd plug-and-play-resume/frontend && yarn install
  >     ```
  > - Create webpack bundles to run servers.
  >   - Development - `yarn build:dev`
  >   - Production - `yarn build:prod`
  > - Finally, we can run webpack-dev-server:
  >     ```shell
  >     yarn dev-server
  >     ```
  > - It should be serving the files to
  >   [http://localhost:3000][http://localhost:3000] now.  
  >   **NOTE**: The user interface is not rendered at this port because our
  >             dev-server's proxy is set to port 8000. We need it because
                everything will be served from Django's dev server which will be
                running on 8000. You can change the proxy setting by modifying
                `frontend/webpack.config.js`.
  > - Leave dev-server running, and open another tab in your terminal. Then,
  >   go back to project root with `cd ..` for the rest of operations.

> #### Postgres ####
  > - Install postgres by following [this instruction](
      https://www.postgresql.org/docs/current/tutorial-install.html).
  > - Open postgres program as root user:
  > - For macOS - `psql postgres`
  > - Others - `sudo su - postgres` then `psql`
  > - Once you are in the console, create a database called plugandplay by
  >    running:
  >     ```postgresql
  >     create database plugandplay;
  >     ```
  > - Also, create a user for this project with a password set to 'password'
  >   ```postgresql
  >   create user plugandplayuser with password 'password';
  >   ```
  > - Now, let's make the user accessible to the database we just created:
  >   ```postgresql
  >   grant all privileges on database plugandplay to plugandplayuser;
  >   ```
  >   Exit the console by typing `\q`.

> #### Python ####
  > 1. We need python3 to build our project. You can download it from [here](
       https://www.python.org/downloads/).
  > 2. If pip is not installed on your machine, you can follow [this instruction](
       https://pip.pypa.io/en/stable/installing/).
  > 3. At this point you should still be in the root directory. Let's create a
  >    python virtual environment by running:
  >    ```shell
  >    python3 -m venv venv
  >    ```
  > 4. To activate the environment, run:
  >    ```shell
  >    source ./venv/bin/activate
  >    ```
  >    You can always deactivate the environment by `deactivate`.
  > 5. Install required dependencies to the virtual environment using pip:
  >    ```shell
  >    pip3 install -r requirements.txt
  >    ```
  > 6. We also need a nltk data called stopwords. We can download it in python
  >    console. Type `python3` in your shell and run:
  >    ```python
  >    >>>  import nltk
  >    >>>  nltk.download('stopwords')
  >    ```
  >    Exit the console by typing:
  >    ```python
  >    >>> exit()
  >    ```
  > 7. We also need to create a file called .env to configure Django with user and database
  >    we created on postgres. Run:
  >    ```shell
  >    cat >> .env << EOF
  >    DB_NAME=plugandplay  
  >    DB_USER=plugandplayuser  
  >    DB_PASS=password  
  >    EOF
  >    ```
  > 8. We are almost done with configuration.  
  >    Let's connect the database to Django by running:
  >    ```shell
  >    python3 manage.py makemigrations && python3 manage.py migrate
  >    ```
  > 9. Finally, to start django dev-server, run:
  >    ```shell
  >    python3 manage.py runserver
  >    ```
  >  The website should be running at [http://localhost:8000]


[//]: # (Todo)
## Todo ##
 - Deploy to Aws Elastic Beanstalk or AWS lambda


[//]: # (Directory Structure)
## Directory Structure ##

##### / #####
```
    .
    ├── README.md
    ├── accounts
    │   ├── admin.py
    │   ├── api.py
    │   ├── apps.py
    │   ├── models.py
    │   ├── serializers.py
    │   ├── tests.py
    │   └── urls.py
    ├── frontend
    ├── listing
    │   ├── admin.py
    │   ├── api.py
    │   ├── apps.py
    │   ├── models.py
    │   ├── serializers.py
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py
    ├── manage.py
    ├── plug-and-play-resume
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    ├── requirements.txt
    └── resume
           ├── admin.py
           ├── api.py
           ├── apps.py
           ├── models.py
           ├── serializers.py
           ├── tests.py
           ├── urls.py
           └── utils.py
```

##### /frontend/ #####
```text
    .
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── package.json
    ├── src
    │   ├── actions
    │   │   ├── auth.js
    │   │   ├── basicInfo.js
    │   │   ├── educations.js
    │   │   ├── experiences.js
    │   │   ├── generated.js
    │   │   ├── jobHistories.js
    │   │   ├── listings.js
    │   │   ├── messages.js
    │   │   └── types.js
    │   ├── app.js
    │   ├── components
    │   │   ├── Header.js
    │   │   ├── NotFoundPage.js
    │   │   ├── PlugResumePage.js
    │   │   ├── accounts
    │   │   │   ├── AccountFrom.js
    │   │   │   ├── LoginPage.js
    │   │   │   └── RegisterPage.js
    │   │   ├── generated
    │   │   │   ├── GeneratedDocument.js
    │   │   │   ├── GeneratedList.js
    │   │   │   ├── GeneratedListItems.js
    │   │   │   ├── GeneratedStyle.js
    │   │   │   └── ResumePage.js
    │   │   ├── listings
    │   │   │   ├── EditListingPage.js
    │   │   │   ├── ListingForm.js
    │   │   │   ├── ListingItems.js
    │   │   │   ├── ListingPage.js
    │   │   │   └── ListingSections.js
    │   │   ├── profile
    │   │   │   ├── ProfilePage.js
    │   │   │   ├── basic-info
    │   │   │   │   ├── BasicInfo.js
    │   │   │   │   └── BasicInfoForm.js
    │   │   │   ├── education
    │   │   │   │   ├── AddEducation.js
    │   │   │   │   ├── EditEducationPage.js
    │   │   │   │   ├── EducationForm.js
    │   │   │   │   ├── EducationList.js
    │   │   │   │   └── EducationListItem.js
    │   │   │   ├── experience
    │   │   │   │   ├── AddExperience.js
    │   │   │   │   ├── EditExperiencePage.js
    │   │   │   │   ├── ExperienceForm.js
    │   │   │   │   ├── ExperienceList.js
    │   │   │   │   └── ExperienceListItem.js
    │   │   │   └── job-history
    │   │   │       ├── AddJobHistory.js
    │   │   │       ├── EditJobHistoryPage.js
    │   │   │       ├── JobHisotryListItems.js
    │   │   │       ├── JobHistoryForm.js
    │   │   │       └── JobHistoryList.js
    │   │   └── utils
    │   │       ├── DateRangeSelector.js
    │   │       └── Loading.js
    │   ├── lib.js
    │   ├── reducers
    │   │   ├── auth.js
    │   │   ├── basicInfo.js
    │   │   ├── educations.js
    │   │   ├── errors.js
    │   │   ├── experiences.js
    │   │   ├── generated.js
    │   │   ├── jobHistories.js
    │   │   ├── listings.js
    │   │   └── messages.js
    │   ├── routers
    │   │   ├── AppRouter.js
    │   │   ├── PrivateRoute.js
    │   │   └── PublicRoute.js
    │   ├── store
    │   │   └── configureStore.js
    │   └── styles
    │       ├── fontawesome-free
    │       └── scss
    │           ├── base
    │           │   ├── _page.scss
    │           │   └── _variables.scss
    │           ├── components
    │           │   ├── _buttons.scss
    │           │   ├── _divider.scss
    │           │   └── _loader.scss
    │           ├── layout
    │           │   ├── _form.scss
    │           │   ├── _lists.scss
    │           │   ├── _navbar.scss
    │           │   └── _section.scss
    │           └── styles.scss
    ├── static
    │   ├── images
    │   │   ├── favicon.png
    │   │   └── loader.gif
    │   └── index.html
    ├── template
    │   └── index.html
    ├── tests.py
    ├── urls.py
    ├── views.py
    ├── webpack-stats.json
    ├── webpack.config.js
    └── yarn.lock
```


[//]: # (Authors)
## Authors ##
- Aisha Khoja
- Keisuke Suzuki
- Tommi Ann Tsuruga
