import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://uxwfvztlgyyxqnwhvlaz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_q1FS7oD3MssmCt15cSUHqg_sbMoqohi';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
