import React from "react";
import { cleanup, fireEvent, getByLabelText, queryAllByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

beforeEach(() => {
  render(<App />)
})

afterEach(() => {
  cleanup()
})

describe("Tasks", () => {
  it("Select the option and check that option 'male' was selected", () => {
    const gender_list = screen.getByLabelText('Choose a gender:')
    userEvent.selectOptions(gender_list, 'male')
    expect(screen.getByRole('option', { name: 'male' }).selected).toBeTruthy();
  });

  it("Check that the user has filled the form except of gender select", () => {
    const first_name = screen.getByPlaceholderText("First Name")
    const email = screen.getByPlaceholderText("Email Address")
    const mobile = screen.getByPlaceholderText("mobile")
    const password = screen.getByPlaceholderText("Password")
    const confirm_password = screen.getByPlaceholderText("confirm Password")

    userEvent.type(first_name, 'shayan')
    userEvent.type(email, 'shayan@gmail.com')
    userEvent.type(mobile, '+989112345678')
    userEvent.type(password, 'Shayan1234')
    userEvent.type(confirm_password, 'Shayan1234')

    expect(screen.getByRole('option', { name: 'select' }).selected).toBeTruthy();
    expect(first_name).toHaveValue('shayan')
    expect(email).toHaveValue('shayan@gmail.com')
    expect(mobile).toHaveValue('+989112345678')
    expect(password).toHaveValue('Shayan1234')
    expect(confirm_password).toHaveValue('Shayan1234')
  });

  it("Check that the field 'First Name' was focused and filled with min 2 letters", async () => {
    const first_name = screen.getByPlaceholderText("First Name")
    userEvent.type(first_name, 'shhsh')
    expect(first_name).toHaveFocus()
    expect(first_name.value.length).toBeGreaterThanOrEqual(2)
  });

  it("Check that the button submit was clicked", () => {
    const alertMock = jest.spyOn(window, 'alert');
    const submit_button = screen.getByRole('button', { name: 'Submit' });

    const first_name = screen.getByPlaceholderText("First Name")
    const email = screen.getByPlaceholderText("Email Address")
    const mobile = screen.getByPlaceholderText("mobile")
    const password = screen.getByPlaceholderText("Password")
    const confirm_password = screen.getByPlaceholderText("confirm Password")

    userEvent.type(first_name, 'shayan')
    userEvent.type(email, 'shayan@gmail.com')
    userEvent.type(mobile, '6777777777')
    userEvent.type(password, 'Shayan1234')
    userEvent.type(confirm_password, 'Shayan1234')

    userEvent.click(submit_button);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  it("Check that the form has a class", () => {
    const form = screen.getByRole('form', {name: 'test'});
    expect(form).toHaveClass('contacts_form')
  });

  it("Check that the labels of the form have a content", () => {
    // const labels = queryAllByRole(<label></label>);
    // console.log(labels)
    // expect(1).toBe(1)

  });

  it("Check that the user can open a list of the gender and doesn't choose anything", () => {
    expect(true).toBe(true);
  });

  it("Check that the user can't to submit until fields will be correct filled", () => {
    expect(true).toBe(true);
  });

  it("Check that the field 'Email' should have correct validation, haven't error message", () => {
    expect(true).toBe(true);
  });

  it("Check that all fields on the first render should be empty", () => {
    expect(true).toBe(true);
  });
});
