# EnrolmentReport
Student enrolment report page in a tabular form

To run this locally, please install composer and npm to your machine.

If you are using MAMP, please use the database credentials mentioned in the .env.example file to connect to database.

Once connected to database via MAMP, please generate some mock data by running the following artisan command from the project root > CLI :

`php artisan db:seed`

To launch the app in the browser, in two separate terminal windows, please run :

`php artisan serve`

and

`npm run watch`

Once up and running, visit the Laravel development server (mentioned in the CLI) and find the over-engineered student enrolment table you were looking for :)

P.S. the project folder and file structure may seem like an overkill for what was intended, but this is a result of me having a base app setup to quickly launch/demo anything.
