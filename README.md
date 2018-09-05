# django-react

Based on a [blog](http://v1k45.com/blog/modern-django-part-1-setting-up-django-and-react/) series.

## Installing dependencies

```bash
pip install django
pip install django-webpack-loader
```

## Starting the development server

```bash

# Start Django
python manage.py runserver

# Start Webpack server
cd frontend && npm install && npm run start
```

Once the servers have started, simply view the app at http://localhost:8000.
