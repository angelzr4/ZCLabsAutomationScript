# API TEST

The objective is to test a sample public API for functionality and correctness.


## PROJECT REQUIREMENTS
1. Target API: https://reqres.in/
2. Endpoints to test:
    - GET: /api/users?page=2
    - POST: /api/users (send name & job)
    - DELETE: /api/users/2
3. Validate status codes.
4. Validate response structure and content.
5. Provide a script with assertions.


## PRE-REQUISITES AND DEPENDENCIES 📋
PRE-REQUISITES:
1. Download Postman desktop app (latest version) : https://www.postman.com/downloads/
2. Create Postman free account


## ASSUMPTIONS

1. OS: Windows
2. Postman application installed
3. Postman account created
4. Postman workspace created
5. Git installed


## GETTING STARTED

From published documentation:
1. Go to: "https://documenter.getpostman.com/view/49180530/2sB3QQK81N", all information about the API and endpoint test suite must be displayed.
2. Click on right-side corner "Run in Postman" button and select "Postman for Windows". Collection must be imported to your selected workspace and ready to be executed.

From GitHub:
1. Open Postman desktop application.
2. Click on Sign In button and enter your login credentials.
3. On the workspace area, click on import button and import the "API Testing Task - Zero Copy Labs.postman_collection.json" file located in ".API Testing Task" folder from your cloned local repository.
4. Collections must be imported and ready to be executed.


## FILES IN FOLDER
├── .API Testing Task/                                  # API Test Suite (Collection)
│   └── API Testing Task - Zero Copy Labs.postman_collection.json   #Collection
│   └── API Testing Task - Zero Copy Labs.postman_test_run.json     #Results
└── README.md


## EXECUTE TEST

To run the test:
1. Once "Getting Started" steps are completed, select imported collection, click on "Run", select all Endpoints and click on "Run...." button.
2. Results will be displayed after execution.
    - Click on each endpoint to see results details.


## AUTHOR

* **Ángel Zavala Rebollo** - (https://github.com/angelzr4)
