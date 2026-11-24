import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`pages_blocks_rich_text\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text NOT NULL,
  	\`width\` text DEFAULT 'full' NOT NULL,
  	\`list_style\` text DEFAULT 'bullet',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_rich_text_order_idx\` ON \`pages_blocks_rich_text\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_rich_text_parent_id_idx\` ON \`pages_blocks_rich_text\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_rich_text_path_idx\` ON \`pages_blocks_rich_text\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_callout\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`icon\` text,
  	\`content\` text,
  	\`variant\` text DEFAULT 'blue' NOT NULL,
  	\`width\` text DEFAULT 'full' NOT NULL,
  	\`list_style\` text DEFAULT 'bullet',
  	\`align\` text DEFAULT 'left',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_callout_order_idx\` ON \`pages_blocks_callout\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_callout_parent_id_idx\` ON \`pages_blocks_callout\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_callout_path_idx\` ON \`pages_blocks_callout\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_table_columns\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_table\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_table_columns_order_idx\` ON \`pages_blocks_table_columns\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_table_columns_parent_id_idx\` ON \`pages_blocks_table_columns\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_table_rows_cells\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text,
  	\`col_span\` numeric DEFAULT 1,
  	\`emphasis\` integer,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_table_rows\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_table_rows_cells_order_idx\` ON \`pages_blocks_table_rows_cells\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_table_rows_cells_parent_id_idx\` ON \`pages_blocks_table_rows_cells\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_table_rows\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_table\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_table_rows_order_idx\` ON \`pages_blocks_table_rows\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_table_rows_parent_id_idx\` ON \`pages_blocks_table_rows\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_table\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`icon\` text,
  	\`title_note\` text,
  	\`style\` text DEFAULT 'bordered' NOT NULL,
  	\`variant\` text DEFAULT 'blue' NOT NULL,
  	\`width\` text DEFAULT 'full' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_table_order_idx\` ON \`pages_blocks_table\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_table_parent_id_idx\` ON \`pages_blocks_table\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_table_path_idx\` ON \`pages_blocks_table\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_download\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`file_id\` integer NOT NULL,
  	\`button_label\` text DEFAULT 'Download formulier' NOT NULL,
  	\`style\` text DEFAULT 'box' NOT NULL,
  	\`width\` text DEFAULT 'full' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`file_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_download_order_idx\` ON \`pages_blocks_download\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_download_parent_id_idx\` ON \`pages_blocks_download\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_download_path_idx\` ON \`pages_blocks_download\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_download_file_idx\` ON \`pages_blocks_download\` (\`file_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_name_grid_names\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_name_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_name_grid_names_order_idx\` ON \`pages_blocks_name_grid_names\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_name_grid_names_parent_id_idx\` ON \`pages_blocks_name_grid_names\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_name_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`width\` text DEFAULT 'full' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_name_grid_order_idx\` ON \`pages_blocks_name_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_name_grid_parent_id_idx\` ON \`pages_blocks_name_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_name_grid_path_idx\` ON \`pages_blocks_name_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_button\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`url\` text NOT NULL,
  	\`icon\` text,
  	\`align\` text DEFAULT 'left' NOT NULL,
  	\`width\` text DEFAULT 'full' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_button_order_idx\` ON \`pages_blocks_button\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_button_parent_id_idx\` ON \`pages_blocks_button\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_button_path_idx\` ON \`pages_blocks_button\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_card\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`icon\` text,
  	\`header_style\` text DEFAULT 'blue' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_card_order_idx\` ON \`pages_blocks_card\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_card_parent_id_idx\` ON \`pages_blocks_card\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_card_path_idx\` ON \`pages_blocks_card\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_media_card\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`badge\` text,
  	\`content\` text NOT NULL,
  	\`list_style\` text DEFAULT 'check',
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_card_order_idx\` ON \`pages_blocks_media_card\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_card_parent_id_idx\` ON \`pages_blocks_media_card\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_card_path_idx\` ON \`pages_blocks_media_card\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_card_image_idx\` ON \`pages_blocks_media_card\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`text\` text,
  	\`link_label\` text,
  	\`link_url\` text,
  	\`link_icon\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_order_idx\` ON \`pages_blocks_cta\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_parent_id_idx\` ON \`pages_blocks_cta\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_path_idx\` ON \`pages_blocks_cta\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_swim_groups\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_swim_groups_order_idx\` ON \`pages_blocks_swim_groups\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_swim_groups_parent_id_idx\` ON \`pages_blocks_swim_groups\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_swim_groups_path_idx\` ON \`pages_blocks_swim_groups\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_training_schedule\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text DEFAULT 'Weekoverzicht' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_training_schedule_order_idx\` ON \`pages_blocks_training_schedule\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_training_schedule_parent_id_idx\` ON \`pages_blocks_training_schedule\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_training_schedule_path_idx\` ON \`pages_blocks_training_schedule\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_info_panel\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text NOT NULL,
  	\`link_label\` text,
  	\`link_url\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_info_panel_order_idx\` ON \`pages_blocks_info_panel\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_info_panel_parent_id_idx\` ON \`pages_blocks_info_panel\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_info_panel_path_idx\` ON \`pages_blocks_info_panel\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`hero_icon\` text DEFAULT 'heart',
  	\`hero_title_lead\` text,
  	\`hero_title\` text NOT NULL,
  	\`hero_subtitle\` text,
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_slug_idx\` ON \`pages\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`pages_updated_at_idx\` ON \`pages\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`pages_created_at_idx\` ON \`pages\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`swim_groups\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`description\` text NOT NULL,
  	\`details\` text,
  	\`accent\` text DEFAULT 'blue-cyan' NOT NULL,
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`swim_groups_image_idx\` ON \`swim_groups\` (\`image_id\`);`)
  await db.run(sql`CREATE INDEX \`swim_groups_updated_at_idx\` ON \`swim_groups\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`swim_groups_created_at_idx\` ON \`swim_groups\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`training_sessions\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`day\` text NOT NULL,
  	\`start_time\` text NOT NULL,
  	\`end_time\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`training_sessions_updated_at_idx\` ON \`training_sessions\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`training_sessions_created_at_idx\` ON \`training_sessions\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`training_sessions_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`swim_groups_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`training_sessions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`swim_groups_id\`) REFERENCES \`swim_groups\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`training_sessions_rels_order_idx\` ON \`training_sessions_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`training_sessions_rels_parent_idx\` ON \`training_sessions_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`training_sessions_rels_path_idx\` ON \`training_sessions_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`training_sessions_rels_swim_groups_id_idx\` ON \`training_sessions_rels\` (\`swim_groups_id\`);`)
  await db.run(sql`CREATE TABLE \`media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alt\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric
  );
  `)
  await db.run(sql`CREATE INDEX \`media_updated_at_idx\` ON \`media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`)
  await db.run(sql`CREATE TABLE \`contact_submissions\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`email\` text NOT NULL,
  	\`message\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`contact_submissions_updated_at_idx\` ON \`contact_submissions\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`contact_submissions_created_at_idx\` ON \`contact_submissions\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`users_sessions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`created_at\` text,
  	\`expires_at\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_sessions_order_idx\` ON \`users_sessions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_sessions_parent_id_idx\` ON \`users_sessions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text NOT NULL,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	\`reset_password_requested_at\` text,
  	\`login_attempts\` numeric DEFAULT 0,
  	\`lock_until\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`payload_kv\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text NOT NULL,
  	\`data\` text NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`payload_kv_key_idx\` ON \`payload_kv\` (\`key\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`global_slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`pages_id\` integer,
  	\`swim_groups_id\` integer,
  	\`training_sessions_id\` integer,
  	\`media_id\` integer,
  	\`contact_submissions_id\` integer,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`swim_groups_id\`) REFERENCES \`swim_groups\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`training_sessions_id\`) REFERENCES \`training_sessions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`contact_submissions_id\`) REFERENCES \`contact_submissions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_pages_id_idx\` ON \`payload_locked_documents_rels\` (\`pages_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_swim_groups_id_idx\` ON \`payload_locked_documents_rels\` (\`swim_groups_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_training_sessions_id_idx\` ON \`payload_locked_documents_rels\` (\`training_sessions_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_contact_submissions_id_idx\` ON \`payload_locked_documents_rels\` (\`contact_submissions_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text,
  	\`value\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_users_id_idx\` ON \`payload_preferences_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_migrations\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`batch\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`home_hero_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`platform\` text NOT NULL,
  	\`url\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`home\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`home_hero_social_links_order_idx\` ON \`home_hero_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`home_hero_social_links_parent_id_idx\` ON \`home_hero_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`home_about_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`icon\` text NOT NULL,
  	\`color\` text DEFAULT 'blue',
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`home\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`home_about_features_order_idx\` ON \`home_about_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`home_about_features_parent_id_idx\` ON \`home_about_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`home_about_photos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`title\` text NOT NULL,
  	\`caption\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`home\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`home_about_photos_order_idx\` ON \`home_about_photos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`home_about_photos_parent_id_idx\` ON \`home_about_photos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`home_about_photos_image_idx\` ON \`home_about_photos\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`home_groups_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`title\` text NOT NULL,
  	\`accent\` text DEFAULT 'blue-cyan' NOT NULL,
  	\`description\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`home\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`home_groups_items_order_idx\` ON \`home_groups_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`home_groups_items_parent_id_idx\` ON \`home_groups_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`home_groups_items_image_idx\` ON \`home_groups_items\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`home_pool_photos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`title\` text NOT NULL,
  	\`caption\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`home\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`home_pool_photos_order_idx\` ON \`home_pool_photos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`home_pool_photos_parent_id_idx\` ON \`home_pool_photos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`home_pool_photos_image_idx\` ON \`home_pool_photos\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`home_events_fallback_posts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`caption\` text NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`home\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`home_events_fallback_posts_order_idx\` ON \`home_events_fallback_posts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`home_events_fallback_posts_parent_id_idx\` ON \`home_events_fallback_posts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`home_events_fallback_posts_image_idx\` ON \`home_events_fallback_posts\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`home_contact_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`icon\` text NOT NULL,
  	\`lines\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`home\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`home_contact_items_order_idx\` ON \`home_contact_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`home_contact_items_parent_id_idx\` ON \`home_contact_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`home\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`hero_title\` text NOT NULL,
  	\`hero_subtitle\` text,
  	\`hero_description\` text,
  	\`hero_video_id\` integer,
  	\`hero_primary_button_label\` text,
  	\`hero_primary_button_url\` text,
  	\`hero_secondary_button_label\` text,
  	\`hero_secondary_button_url\` text,
  	\`about_heading_lead\` text,
  	\`about_heading\` text NOT NULL,
  	\`about_intro\` text,
  	\`groups_heading_lead\` text,
  	\`groups_heading\` text NOT NULL,
  	\`groups_intro\` text,
  	\`pool_heading_lead\` text,
  	\`pool_heading\` text NOT NULL,
  	\`pool_intro\` text,
  	\`events_heading_lead\` text,
  	\`events_heading\` text NOT NULL,
  	\`events_intro\` text,
  	\`events_instagram_username\` text NOT NULL,
  	\`events_post_count\` numeric DEFAULT 3,
  	\`events_follow_label\` text DEFAULT 'Volg ons op Instagram',
  	\`contact_heading_lead\` text,
  	\`contact_heading\` text NOT NULL,
  	\`contact_intro\` text,
  	\`contact_success_message\` text DEFAULT 'Bedankt voor je bericht! We nemen snel contact met je op.',
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`hero_video_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`home_hero_hero_video_idx\` ON \`home\` (\`hero_video_id\`);`)
  await db.run(sql`CREATE TABLE \`navigation_items_children\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`url\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`navigation_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`navigation_items_children_order_idx\` ON \`navigation_items_children\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`navigation_items_children_parent_id_idx\` ON \`navigation_items_children\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`navigation_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`url\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`navigation\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`navigation_items_order_idx\` ON \`navigation_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`navigation_items_parent_id_idx\` ON \`navigation_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`navigation\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE TABLE \`site_settings_footer_quick_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`url\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_footer_quick_links_order_idx\` ON \`site_settings_footer_quick_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_footer_quick_links_parent_id_idx\` ON \`site_settings_footer_quick_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_footer_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`platform\` text NOT NULL,
  	\`url\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_footer_social_links_order_idx\` ON \`site_settings_footer_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_footer_social_links_parent_id_idx\` ON \`site_settings_footer_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_footer_legal_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`url\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_footer_legal_links_order_idx\` ON \`site_settings_footer_legal_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_footer_legal_links_parent_id_idx\` ON \`site_settings_footer_legal_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`site_name\` text NOT NULL,
  	\`meta_title\` text NOT NULL,
  	\`meta_description\` text,
  	\`meta_keywords\` text,
  	\`footer_contact_location\` text,
  	\`footer_contact_phone\` text,
  	\`footer_contact_email\` text,
  	\`footer_credit_name\` text,
  	\`footer_credit_email\` text,
  	\`footer_credit_phone\` text,
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`pages_blocks_rich_text\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_callout\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_table_columns\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_table_rows_cells\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_table_rows\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_table\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_download\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_name_grid_names\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_name_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_button\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_card\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_media_card\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_swim_groups\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_training_schedule\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_info_panel\`;`)
  await db.run(sql`DROP TABLE \`pages\`;`)
  await db.run(sql`DROP TABLE \`swim_groups\`;`)
  await db.run(sql`DROP TABLE \`training_sessions\`;`)
  await db.run(sql`DROP TABLE \`training_sessions_rels\`;`)
  await db.run(sql`DROP TABLE \`media\`;`)
  await db.run(sql`DROP TABLE \`contact_submissions\`;`)
  await db.run(sql`DROP TABLE \`users_sessions\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`DROP TABLE \`payload_kv\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_migrations\`;`)
  await db.run(sql`DROP TABLE \`home_hero_social_links\`;`)
  await db.run(sql`DROP TABLE \`home_about_features\`;`)
  await db.run(sql`DROP TABLE \`home_about_photos\`;`)
  await db.run(sql`DROP TABLE \`home_groups_items\`;`)
  await db.run(sql`DROP TABLE \`home_pool_photos\`;`)
  await db.run(sql`DROP TABLE \`home_events_fallback_posts\`;`)
  await db.run(sql`DROP TABLE \`home_contact_items\`;`)
  await db.run(sql`DROP TABLE \`home\`;`)
  await db.run(sql`DROP TABLE \`navigation_items_children\`;`)
  await db.run(sql`DROP TABLE \`navigation_items\`;`)
  await db.run(sql`DROP TABLE \`navigation\`;`)
  await db.run(sql`DROP TABLE \`site_settings_footer_quick_links\`;`)
  await db.run(sql`DROP TABLE \`site_settings_footer_social_links\`;`)
  await db.run(sql`DROP TABLE \`site_settings_footer_legal_links\`;`)
  await db.run(sql`DROP TABLE \`site_settings\`;`)
}
