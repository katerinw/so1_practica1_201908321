FROM golang:1.19
WORKDIR /backContainer
COPY . .
RUN go mod download
ENV MONGODB 192.168.122.172
EXPOSE 8000
CMD ["go","run","main.go"]
