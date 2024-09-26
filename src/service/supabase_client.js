import { createClient } from '@supabase/supabase-js';

const CLIENT_URL = 'https://krvhsenijarwihcxbryi.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtydmhzZW5pamFyd2loY3hicnlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczNDM0NzQsImV4cCI6MjA0MjkxOTQ3NH0.rEvJElqcXhmDS0oHa4c4KGDp-WifgT2HLcUazMSryWM';

export const supabase = createClient(CLIENT_URL, SUPABASE_KEY);

export const userAuthorization = supabase.auth;