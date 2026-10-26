import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
// Substitua pelas suas chaves do painel do Supabase (Project Settings > API)
const supabaseUrl = 'https://lwoebaunatepykyqweip.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3b2ViYXVuYXRlcHlreXF3ZWlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI5ODMyNjcsImV4cCI6MjEwODU1OTI2N30.ANgobkz73-3fPOCcWUrWMhT-BSC7Gde5ur1_RhKN1Tk';
export const supabase = createClient(supabaseUrl, supabaseKey);
