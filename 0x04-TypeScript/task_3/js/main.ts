/// <reference path="crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: Emmanuel',
    lastName: 'Godwin',
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {age: 35, ...row};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
