package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"sync"
	"time"
)

const (
	MaxRetries = 3
	BaseURL    = "https://api.example.com"
	Timeout    = 5 * time.Second
)

type Processor interface {
	Process(data []byte) error
}

type User struct {
	ID        int       `json:"id"`
	Username  string    `json:"username"`
	Email     string    `json:"email,omitempty"`
	CreatedAt time.Time `json:"created_at"`
	Active    bool      `json:"active"`
}

type ServiceError struct {
	Code    int
	Message string
}

func (e *ServiceError) Error() string {
	return fmt.Sprintf("Error %d: %s", e.Code, e.Message)
}

func Filter[T any](items []T, predicate func(T) bool) []T {
	var result []T
	for _, item := range items {
		if predicate(item) {
			result = append(result, item)
		}
	}
	return result
}

func (u *User) Activate() {
	u.Active = true
}

func processUsers(users []User) <-chan string {
	results := make(chan string)
	
	go func() {
		defer close(results)
		var wg sync.WaitGroup
		
		for _, u := range users {
			wg.Add(1)
			go func(user User) {
				defer wg.Done()
				time.Sleep(100 * time.Millisecond)
				results <- fmt.Sprintf("Processed user: %s", user.Username)
			}(u)
		}
		
		wg.Wait()
	}()
	
	return results
}

func main() {
	var count int = 10
	message := "Hello, World!"
	
	config := map[string]string{
		"env": "production",
		"version": "1.0.0",
	}

	numbers := []int{1, 2, 3, 4, 5}
	numbers = append(numbers, 6)

	if len(numbers) > 5 {
		fmt.Println("Big list")
	} else {
		fmt.Println("Small list")
	}

	switch config["env"] {
	case "production":
		fmt.Println("Running in prod")
	case "development":
		fmt.Println("Running in dev")
	default:
		fmt.Println("Unknown env")
	}

	for i, n := range numbers {
		if n%2 == 0 {
			continue
		}
		fmt.Printf("Index: %d, Value: %d\n", i, n)
	}

	user := User{ID: 1, Username: "gopher"}
	jsonBytes, err := json.Marshal(user)
	if err != nil {
		panic(err)
	}
	fmt.Printf("JSON: %s\n", string(jsonBytes))

	results := processUsers([]User{user})
	for res := range results {
		fmt.Println(res)
	}
	
	defer fmt.Println("Exiting main...")
	
	fmt.Printf("Message: %s, Count: %d\n", message, count)
}
