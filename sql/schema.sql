create table public.people
(
	name text not null,
	address text not null,
	email text not null,
	id serial not null
		constraint people_pk
			primary key,
	deleted boolean default false not null
);


create unique index people_id_uindex
	on public.people (id);
