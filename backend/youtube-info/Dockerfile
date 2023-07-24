FROM python:3
LABEL authors="sunpot"

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY ./*.py .

CMD [ "python3", "./main.py" ]