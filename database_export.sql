--
-- PostgreSQL database dump
--

\restrict SMsaWr781iDaENcOurFh9XF6brurV4TwsWHD8VLcVh7np0UJTOfw6Pem7wHbNW9

-- Dumped from database version 16.10
-- Dumped by pg_dump version 16.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: enquiries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.enquiries (
    id integer NOT NULL,
    full_name text NOT NULL,
    phone text NOT NULL,
    email text NOT NULL,
    property_address text NOT NULL,
    service_required text NOT NULL,
    is_emergency boolean DEFAULT false,
    preferred_contact text DEFAULT 'phone'::text NOT NULL,
    message text,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.enquiries OWNER TO postgres;

--
-- Name: enquiries_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.enquiries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.enquiries_id_seq OWNER TO postgres;

--
-- Name: enquiries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.enquiries_id_seq OWNED BY public.enquiries.id;


--
-- Name: enquiries id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enquiries ALTER COLUMN id SET DEFAULT nextval('public.enquiries_id_seq'::regclass);


--
-- Data for Name: enquiries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.enquiries (id, full_name, phone, email, property_address, service_required, is_emergency, preferred_contact, message, created_at) FROM stdin;
\.


--
-- Name: enquiries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.enquiries_id_seq', 1, false);


--
-- Name: enquiries enquiries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enquiries
    ADD CONSTRAINT enquiries_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict SMsaWr781iDaENcOurFh9XF6brurV4TwsWHD8VLcVh7np0UJTOfw6Pem7wHbNW9

