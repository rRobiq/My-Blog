# Django Blog Project

A simple, fully functional blog website I built for a university assignment at the West University of Timișoara. The main goal of this project was to learn how to connect a Python backend to a frontend interface and manage a database.

## Tech Stack
* **Backend:** Python, Django
* **Frontend:** HTML, CSS, vanilla JavaScript
* **Database:** SQLite (Django's default)

## What it does
* **Dynamic Posts:** You can add, edit, and view blog posts directly from the app without touching the HTML code.
* **Image Uploads:** Supports uploading and displaying images for each post (using Django's media routing).
* **MVT Structure:** Organized using Django's standard Model-View-Template pattern.

## How to run it locally

1. Clone this repo:
git clone https://github.com/rRobiq/My-Blog.git

2. Go into the project folder:
cd My-Blog

3. Apply the migrations to set up the database:
python manage.py migrate

4. Start the server:
python manage.py runserver

5. Open `http://127.0.0.1:8000/` in your browser.
