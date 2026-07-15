-- Run this in your Supabase SQL Editor

-- Bookings table
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  instagram TEXT NOT NULL,
  equipment TEXT NOT NULL,
  pickup_date DATE NOT NULL,
  return_date DATE NOT NULL,
  purpose TEXT,
  id_type TEXT NOT NULL,
  id_photo_url TEXT,
  payment_method TEXT NOT NULL,
  receipt_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'declined', 'completed')),
  total_amount NUMERIC(10,2),
  notes TEXT
);

-- Contact messages table
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE
);

-- Equipment table
CREATE TABLE equipment (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  daily_rate NUMERIC(10,2) NOT NULL,
  weekday_rate NUMERIC(10,2) NOT NULL,
  features TEXT[],
  image_url TEXT,
  is_available BOOLEAN DEFAULT TRUE,
  is_coming_soon BOOLEAN DEFAULT FALSE
);

-- Blacklist table
CREATE TABLE blacklist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  instagram TEXT,
  reason TEXT NOT NULL
);

-- Insert default equipment
INSERT INTO equipment (name, category, description, daily_rate, weekday_rate, features, image_url, is_available) VALUES
('Canon G7X Mark III', 'Compact Camera', 'Perfect for vlogging and content creation. 4K video, flip-up touchscreen, and built-in ND filter.', 600, 800, ARRAY['20.1MP 1-inch CMOS sensor', '4K 30fps / 1080p 120fps', '3.5inch flip-up touchscreen', 'Built-in ND filter', 'Live streaming capable', 'Compact & lightweight'], '/images/G7X.jpg', true);

INSERT INTO equipment (name, category, description, daily_rate, weekday_rate, is_coming_soon) VALUES
('Canon EOS R50', 'Mirrorless Camera', 'Lightweight mirrorless with 4K video and subject detection AF.', 900, 1200, true),
('DJI Pocket 3', 'Gimbal Camera', 'Stabilized pocket camera with 4K/120fps and 1-inch sensor.', 800, 1000, true),
('Rode Wireless Go II', 'Wireless Microphone', 'Dual-channel wireless mic system for interviews and vlogs.', 400, 500, true);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE blacklist ENABLE ROW LEVEL SECURITY;

-- Policies: Allow anyone to insert bookings and messages (public forms)
CREATE POLICY "Anyone can create bookings" ON bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can create messages" ON messages FOR INSERT WITH CHECK (true);

-- Policies: Allow anyone to read equipment (public catalog)
CREATE POLICY "Anyone can read equipment" ON equipment FOR SELECT USING (true);

-- Policies: Authenticated users (admin) can do everything
CREATE POLICY "Admin can read bookings" ON bookings FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admin can update bookings" ON bookings FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Admin can delete bookings" ON bookings FOR DELETE TO authenticated USING (true);

CREATE POLICY "Admin can read messages" ON messages FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admin can update messages" ON messages FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Admin can delete messages" ON messages FOR DELETE TO authenticated USING (true);

CREATE POLICY "Admin can manage equipment" ON equipment FOR ALL TO authenticated USING (true);

CREATE POLICY "Admin can manage blacklist" ON blacklist FOR ALL TO authenticated USING (true);
