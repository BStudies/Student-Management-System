# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170918140953) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.bigint "person_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["person_id"], name: "index_admins_on_person_id"
  end

  create_table "courses", force: :cascade do |t|
    t.bigint "professor_id"
    t.string "name"
    t.string "description"
    t.integer "cost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["professor_id"], name: "index_courses_on_professor_id"
  end

  create_table "courses_students", id: false, force: :cascade do |t|
    t.bigint "student_id", null: false
    t.bigint "course_id", null: false
    t.index ["student_id", "course_id"], name: "index_courses_students_on_student_id_and_course_id"
  end

  create_table "fafsa_accounts", force: :cascade do |t|
    t.bigint "financial_account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["financial_account_id"], name: "index_fafsa_accounts_on_financial_account_id"
  end

  create_table "fafsas", force: :cascade do |t|
    t.bigint "payment_type_id"
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_type_id"], name: "index_fafsas_on_payment_type_id"
  end

  create_table "financial_accounts", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "grades", force: :cascade do |t|
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "loan_accounts", force: :cascade do |t|
    t.bigint "financial_account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["financial_account_id"], name: "index_loan_accounts_on_financial_account_id"
  end

  create_table "loans", force: :cascade do |t|
    t.bigint "payment_type_id"
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_type_id"], name: "index_loans_on_payment_type_id"
  end

  create_table "out_of_pockets", force: :cascade do |t|
    t.bigint "payment_type_id"
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_type_id"], name: "index_out_of_pockets_on_payment_type_id"
  end

  create_table "payment_types", force: :cascade do |t|
    t.bigint "student_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["student_id"], name: "index_payment_types_on_student_id"
  end

  create_table "people", force: :cascade do |t|
    t.bigint "user_id"
    t.string "date_of_birth", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "emergency_contact", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "student_id"
    t.bigint "professor_id"
    t.bigint "admin_id"
    t.index ["admin_id"], name: "index_people_on_admin_id"
    t.index ["professor_id"], name: "index_people_on_professor_id"
    t.index ["student_id"], name: "index_people_on_student_id"
    t.index ["user_id"], name: "index_people_on_user_id"
  end

  create_table "professors", force: :cascade do |t|
    t.bigint "person_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["person_id"], name: "index_professors_on_person_id"
  end

  create_table "scholarship_accounts", force: :cascade do |t|
    t.bigint "financial_account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["financial_account_id"], name: "index_scholarship_accounts_on_financial_account_id"
  end

  create_table "scholarships", force: :cascade do |t|
    t.bigint "payment_type_id"
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_type_id"], name: "index_scholarships_on_payment_type_id"
  end

  create_table "students", force: :cascade do |t|
    t.bigint "person_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["person_id"], name: "index_students_on_person_id"
  end

  create_table "tap_accounts", force: :cascade do |t|
    t.bigint "financial_account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["financial_account_id"], name: "index_tap_accounts_on_financial_account_id"
  end

  create_table "taps", force: :cascade do |t|
    t.bigint "payment_type_id"
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_type_id"], name: "index_taps_on_payment_type_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "auth_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "person_id"
    t.index ["person_id"], name: "index_users_on_person_id"
    t.index ["username"], name: "index_users_on_username"
  end

end
