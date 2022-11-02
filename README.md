## BLUE TICK HR

BlueTick HR is a solution that allows you to verify your 
credentials on the Algorand Blockchain including your education, 
academic achievements, micro-credentials, references and psych 
testing results. The time for disrupting the HR industry is ripe. 
It is tiresome to have to submit your CV over and over again for 
jobs and for your employers to have to verify your details with 
the previous employers and academic institutions. 
In traditional systems, you have no control over your data and 
who owns it. Partnering with Reach and Verida.io to build on the 
Algorand Blockchain, Blue Tick HR will have verified credentials 
which can be released to the employer and can be de-identified to 
reduce recruitment bias. 
For more details please check article [here](https://docs.google.com/document/d/15_iPheKXYwDaNtkiPRZycu1TAiQAFBNhjbN0pOnGcIE/edit#) 

## Tech Stack

Smart contract is written in `Reach`.  Please check [Reach Code](https://github.com/meetthosar/bluetickhr/tree/main/rsh_file) 

You will find `build` file [here](https://github.com/meetthosar/bluetickhr/tree/main/resources/js/build) 

Front end JS library : `Alipine`

Server Side : PHP

## Installation steps 

Clone the repository 

```
git clone https://github.com/meetthosar/bluetickhr.git
```

Install Laravel packages

```
composer install
```

Install npm packages

```
npm install && npm run dev
```

Copy `.env` file from `env_file` folder and create database and run following command.

```
php artisan migrate --seed
```

In two different browsers open two actors of the application :

First browser open `University` area with [/universityLogin] link

Second browser open `Student` area with [/studentLogin] link 

For further details you can check this [Demo](https://youtu.be/oW1-2NjIGzw) video.

