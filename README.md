## Test Task For AIONYS

### Install APP:

First:

### `npm install`

Then:

### `npm run installModules`

### Start APP:

### `npm run app`

Server is started on port 5001, front on 3000;

### Start tests:

### `npm run test:cypress`


## Required conditions:

### Backend:

1. 4 endpoints:
GET /notes (get all notes)
GET /notes/{id} (get specified note)
POST /notes (create note)
PUT /notes/{id} (update note)
DELETE /notes/{id} (delete note)

2. mocked database (do not use real database because it requires additional
software installed)

3. Add instructions how to run API service to README.md

### Frontend:

4. implement UI for create/updating/deleting notes and for showing list of notes
5. Use state manager
6. Implement ability to change language (i18n localization)
7. Implement 1 e2e test
8. Add instructions how to run client app and test to README.md
9. SCSS/SASS for styling (if custom styles required)

### Technologies and tools you may use:

- React / Angular
- .NET Core / NodeJS

Delivery requirements: code should be pushed to Github repository and it should be
possible to run following the instruction in README.md.
