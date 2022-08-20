package main

import (
	"context"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Auto struct {
	Placa  string `json:PLaca, omitempty`
	Marca  string `json:Marca, omitempty`
	Modelo string `json:Modelo, omitempty`
	Serie  string `json:Serie, omitempty`
	Color  string `json:Color, omitempty`
}

var client *mongo.Client

func main() {
	fmt.Println("HOLA MUNDO CON GOLANG")
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	client, _ := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))
	defer client.Disconnect(ctx)
}

//go run main.go
//"go.mongodb.org/mongo-driver/mongo"
//"go.mongodb.org/mongo-driver/mongo/options"
