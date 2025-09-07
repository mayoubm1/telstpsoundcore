import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yqldqeacofpmmguxcngm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxbGRxZWFjb2ZwbW1ndXhjbmdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyMTA1MTQsImV4cCI6MjA3Mjc4NjUxNH0.cL0XISlQjaHMwLLrGm3LKfNgfV641IwAEevqIO80T54'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);