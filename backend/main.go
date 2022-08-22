package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"

	"go.mongodb.org/mongo-driver/mongo/options"
)

type Auto struct {
	Placa  string `json:"Placa, omitempty"`
	Marca  string `json:"Marca, omitempty"`
	Modelo string `json:"Modelo, omitempty"`
	Serie  string `json:"Serie, omitempty"`
	Color  string `json:"Color, omitempty"`
}

type Log struct {
	Func string `json:"Func, omitempty"`
	Time string `json:"Time, omitempty"`
}

var client *mongo.Client

// Endpoints
func createAuto(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(http.StatusCreated)
	var auto Auto
	json.NewDecoder(request.Body).Decode(&auto)
	collection := client.Database("dbp1").Collection("auto")
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	result, _ := collection.InsertOne(ctx, auto)
	json.NewEncoder(response).Encode(result)
}

func createLog(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(http.StatusCreated)
	var log Log
	json.NewDecoder(request.Body).Decode(&log)
	collection := client.Database("dbp1").Collection("log")
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	result, _ := collection.InsertOne(ctx, log)
	json.NewEncoder(response).Encode(result)
}

func updateAuto(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(http.StatusCreated)
	var auto Auto
	json.NewDecoder(request.Body).Decode(&auto)
	collection := client.Database("dbp1").Collection("auto")
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)

	result, err := collection.ReplaceOne(ctx,
		bson.M{"placa": &auto.Placa},
		bson.M{"placa": &auto.Placa, "marca": &auto.Marca, "modelo": &auto.Modelo, "serie": &auto.Serie, "color": &auto.Color})

	if err != nil {
		panic(err)
	}

	json.NewEncoder(response).Encode(result)
}

func getAuto(response http.ResponseWriter, request *http.Request) {
	response.Header().Add("Content-Type", "application/json")
	var listAutos []Auto
	collection := client.Database("dbp1").Collection("auto")
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		fmt.Println(err)
	}
	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var auto Auto
		cursor.Decode(&auto)
		listAutos = append(listAutos, auto)
	}
	json.NewEncoder(response).Encode(listAutos)
}

func getAutoMarca(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(http.StatusCreated)
	var auto Auto
	json.NewDecoder(request.Body).Decode(&auto)
	collection := client.Database("dbp1").Collection("auto")
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	cursor, err := collection.Find(ctx, bson.M{"marca": &auto.Marca})
	var listAutos []Auto
	if err != nil {
		fmt.Println(err)
	}
	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var auto Auto
		cursor.Decode(&auto)
		listAutos = append(listAutos, auto)
	}
	json.NewEncoder(response).Encode(listAutos)
}

func getAutoModelo(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(http.StatusCreated)
	var auto Auto
	json.NewDecoder(request.Body).Decode(&auto)
	collection := client.Database("dbp1").Collection("auto")
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	cursor, err := collection.Find(ctx, bson.M{"modelo": &auto.Modelo})
	var listAutos []Auto
	if err != nil {
		fmt.Println(err)
	}
	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var auto Auto
		cursor.Decode(&auto)
		listAutos = append(listAutos, auto)
	}
	json.NewEncoder(response).Encode(listAutos)
}

func getAutoColor(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(http.StatusCreated)
	var auto Auto
	json.NewDecoder(request.Body).Decode(&auto)
	collection := client.Database("dbp1").Collection("auto")
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	cursor, err := collection.Find(ctx, bson.M{"color": &auto.Color})
	var listAutos []Auto
	if err != nil {
		fmt.Println(err)
	}
	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var auto Auto
		cursor.Decode(&auto)
		listAutos = append(listAutos, auto)
	}
	json.NewEncoder(response).Encode(listAutos)
}

func deleteAuto(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(http.StatusCreated)
	var auto Auto
	json.NewDecoder(request.Body).Decode(&auto)
	collection := client.Database("dbp1").Collection("auto")
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	result, err := collection.DeleteOne(ctx, bson.M{"placa": &auto.Placa})
	if err != nil {
		fmt.Println(err)
	}
	json.NewEncoder(response).Encode(result)
}

func main() {
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	client, _ = mongo.Connect(ctx, options.Client().ApplyURI("mongodb://192.168.1.2:27017"))

	Direcciones()

	defer client.Disconnect(ctx)
}

func Direcciones() {
	router := mux.NewRouter()
	//POST
	router.HandleFunc("/create", createAuto).Methods("POST")
	router.HandleFunc("/log", createLog).Methods("POST")
	router.HandleFunc("/marca", getAutoMarca).Methods("POST")
	router.HandleFunc("/modelo", getAutoModelo).Methods("POST")
	router.HandleFunc("/color", getAutoColor).Methods("POST")

	//PUT
	router.HandleFunc("/update", updateAuto).Methods("PUT")

	//GET
	router.HandleFunc("/read", getAuto).Methods("GET")

	//Delete
	router.HandleFunc("/delete", deleteAuto).Methods("DELETE")

	log.Fatal(http.ListenAndServe(":8000", handlers.CORS(handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"}), handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "DELETE", "OPTIONS"}), handlers.AllowedOrigins([]string{"*"}))(router)))
	//log.Fatal(http.ListenAndServe(":8000", router))
}

//go run main.go

//db.auto.insert({placa:"124dee4",marca:"Honda",modelo:"2011",serie:"element",color:"Rojo"})
///home/katerine/Escritorio/SistemasOperativos1/Laboratorio/Practicas/Practica1/so1_practica1_201908321/database
