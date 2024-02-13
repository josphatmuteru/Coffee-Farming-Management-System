package supabase

import (
	"context"
	"fmt"
	"github.com/supabase-go"
)





supabaseURL := "https://lrdykizhsavmbuwjxsbj.supabase.co"
supabaseAPIKEY := "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyZHlraXpoc2F2bWJ1d2p4c2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MzY5MDUsImV4cCI6MjAyMjExMjkwNX0.fUhOw3t5HaObseDfRY73_8iGtYXSR6m5bLdgk_GOVXk"

Supabase, Err := supabase.NewClient(context.Background(), supabaseURL, supabaseAPIKey)
if err != nil {
    fmt.Println("Error initializing Supabase client:", err)
    return
}