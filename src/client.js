
import { createClient } from '@supabase/supabase-js'

const supabaseUrl ='https://kmyoanwszvkyyinunncw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtteW9hbndzenZreXlpbnVubmN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyNDI0NDksImV4cCI6MjAxNjgxODQ0OX0.aDorzKgzztyDKiiOm11orbczxQvkEkoOw3Ke7x_jU7M'
export const supabase = createClient(supabaseUrl, supabaseKey)