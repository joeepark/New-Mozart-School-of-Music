import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gvachkupgmlkxxqsasbz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2YWNoa3VwZ21sa3h4cXNhc2J6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3Njk1ODY4OSwiZXhwIjoxOTkyNTM0Njg5fQ.-CoQGRPnfZaSXATrc7y71ZkMYhApqkv9glt-yYflu9s'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;