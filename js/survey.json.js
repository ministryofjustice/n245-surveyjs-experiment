var surveyJSON = {
  pages: [{
      elements: [{
        type: "html",
        html: "<p>Read these notes carefully before completing the form.</p>\n<ul class=\"list-bullet\">\n<li>Tick the correct boxes and give as much information as\nyou can. It will help the court make a fair decision about\nhow much you can afford to pay if the claimant refuses\nyour offer.</li>\n<li>If you do not complete all the details and sign the form, the\ncourt will not be able to deal with your application.</li>\n<li>The form will be sent to the claimant to consider your offer.</li>\n<li>The court will send you an order giving details of how and\nwhen to pay or will tell you when to come to court. You will\nbe informed of the court’s decision.</li>\n<li>You will have to pay a fee for your application. You can get\ndetails of the fee to pay and information about what to do\nif you cannot pay all or part of a fee from any county court\noffice.</li>\n</ul>",
        name: "blurb"
      }],
      name: "Title Page",
      title: "Application for suspension of a warrant and/or variation of an order"
    },
    {
      elements: [{
        type: "checkbox",
        isRequired: true,
        choices: [{
            value: "suspension_of_warrant",
            text: "suspension of the warrant and/or"
          },
          {
            value: "reduction_in_instalment",
            text: "a reduction in the instalment order"
          }
        ],
        name: "applying_for",
        title: "I cannot pay the amount ordered and\nI wish to apply for"
      }],
      name: "applying_for",
      title: "What are you applying for?"
    },
    {
      name: "personal_details",
      title: "Personal Details",
      elements: [{
          name: "title",
          isRequired: true,
          title: "Title",
          type: "dropdown",
          choices: [{
              value: "mr",
              text: "Mr."
            },
            {
              value: "mrs",
              text: "Mrs."
            },
            {
              value: "miss",
              text: "Miss."
            },
            {
              value: "ms",
              text: "Ms."
            }
          ]
        },
        {
          type: "text",
          name: "forename",
          isRequired: true,
          title: "Forename"
        },
        {
          type: "text",
          name: "surname",
          isRequired: true,
          title: "Surname"
        },
        {
          type: "text",
          inputType: "number",
          name: "age",
          isRequired: true,
          title: "Age"
        },
        {
          name: "marital_status",
          isRequired: true,
          title: "Marital Status",
          type: "radiogroup",
          choices: [{
              value: "married",
              text: "Married"
            },
            {
              value: "single",
              text: "Single"
            },
            {
              value: "other",
              text: "Other"
            }
          ]
        }
      ]
    },
    {
      name: "marital_status_other",
      elements: [{
        name: "marital_status_other",
        isRequired: true,
        title: "Please give the details of your marital status",
        type: "text",
        visibleIf: "{marital_status} = 'other'"
      }]
    },
    {
      name: "personal_details_address",
      title: "Personal Details",
      elements: [{
          type: "comment",
          name: "address",
          isRequired: true,
          title: "Address"
        },
        {
          type: "text",
          name: "postcode",
          isRequired: true,
          title: "Postcode"
        },
        {
          type: "text",
          name: "phone_number",
          title: "Daytime phone number"
        }
      ]
    },
    {
      name: "has_dependent_children",
      title: "Dependents",
      elements: [{
        name: "has_dependent_children",
        isRequired: true,
        title: "Do you have any dependent children (<19 years old)?",
        type: "radiogroup",
        choices: [{
            value: "yes",
            text: "Yes"
          },
          {
            value: "no",
            text: "No"
          }
        ]
      }]
    },
    {
      name: "children_ages",
      title: "Dependents",
      visibleIf: "{has_dependent_children} = 'yes'",
      elements: [{
        name: "children_ages",
        isRequired: true,
        title: "Please provide the ages and dates of birth of your children.",
        type: "matrixdynamic",
        addRowText: "Add another child",
        cellType: "text",
        columns: [{
            name: "age",
            title: "Age",
            cellType: "text"
          },
          {
            name: "child_dob",
            title: "Date of Birth",
            cellType: "text",
            inputType: "date"
          }
        ]
      }]
    },
    {
      name: "has_other_dependents",
      title: "Other Dependents",
      elements: [{
        name: "has_other_dependents",
        isRequired: true,
        title: "Do you have any other dependents?",
        type: "radiogroup",
        choices: [{
            value: "yes",
            text: "Yes"
          },
          {
            value: "no",
            text: "No"
          }
        ]
      }]
    },
    {
      name: "other_dependents",
      title: "Other dependents",
      visibleIf: "{has_other_dependents} = 'yes'",
      elements: [{
        type: "comment",
        name: "other_dependents",
        isRequired: true,
        title: "Please provide details of any other dependents"
      }]
    },
    {
      name: "court_details",
      title: "Court",
      elements: [{
          type: "text",
          name: "name_of_court",
          isRequired: true,
          title: "Name of court"
        },
        {
          type: "text",
          name: "claim_number",
          isRequired: true,
          title: "Claim no."
        },
        {
          type: "text",
          name: "fee_account_number",
          title: "Fee account no."
        },
        {
          type: "text",
          name: "hwf_reference",
          title: "Help with Fees reference no."
        },
        {
          type: "text",
          name: "warrant_number",
          title: "Warrant no."
        },
        {
          type: "text",
          name: "local_number",
          title: "Local no."
        },
        {
          type: "text",
          name: "claimants_name",
          isRequired: true,
          title: "Claimant’s name (including ref.)"
        },
        {
          type: "text",
          name: "defendants_name",
          isRequired: true,
          title: "Defendant’s name (including ref.)"
        }
      ]
    },
    {
      name: "employment_status",
      title: "Employment Status",
      elements: [{
          type: "html",
          html: "<p>What is your employment status?</p>"
        },
        {
          name: "employment_status",
          isRequired: true,
          title: "Employment Status",
          type: "radiogroup",
          choices: [{
              value: "employed",
              text: "Employed"
            },
            {
              value: "self_employed",
              text: "Self-employed"
            },
            {
              value: "unemployed",
              text: "Unemployed"
            },
            {
              value: "pensioner",
              text: "Pensioner"
            }
          ]
        }
      ]
    },

    {
      name: "employment_details",
      title: "Employment Details",
      visibleIf: "{employment_status} = 'employed'",
      elements: [{
          name: "employed_as",
          isRequired: true,
          type: "text",
          title: "Job Title"
        },
        {
          name: "employer",
          isRequired: true,
          type: "text",
          title: "Employer"
        },
        {
          name: "other_jobs",
          type: "comment",
          title: "Jobs other than main job (give details)"
        }
      ]
    },
    {
      name: "self_employment_details",
      title: "Self-employment Details",
      visibleIf: "{employment_status} = 'self_employed'",
      elements: [{
          name: "self_employed_as",
          isRequired: true,
          type: "text",
          title: "Job Title"
        },
        {
          name: "self_employed_turnover",
          isRequired: true,
          type: "text",
          title: "Annual turnover"
        },
        {
          name: "ni_in_arrears",
          isRequired: true,
          title: "Are you in arrears with your National Insurance contributions, income tax or VAT?",
          type: "radiogroup",
          choices: [{
              value: "yes",
              text: "Yes"
            },
            {
              value: "no",
              text: "No"
            }
          ]
        }
      ]
    },
    {
      name: "arrears_amount",
      title: "Arrears",
      visibleIf: "{ni_in_arrears} = 'yes'",
      elements: [{
          name: "arrears_amount",
          isRequired: true,
          title: "How much do you owe?",
          type: "text"
        },
        {
          name: "contracts_and_other_work",
          title: "Details of contracts and other work in hand",
          type: "comment"
        },
        {
          name: "sums_due_for_work_done",
          title: "Sums due for work done",
          type: "comment"
        }
      ]
    },
    {
      name: "unemployed_for",
      title: "How long have you been unemployed?",
      visibleIf: "{employment_status} = 'unemployed'",
      elements: [{
          name: "unemployed_years",
          isRequired: true,
          title: "Years",
          type: "text"
        },
        {
          name: "unemployed_months",
          isRequired: true,
          title: "Months",
          type: "text"
        }
      ]
    },
    {
      name: "bank_and_savings_accounts",
      title: "Do you have a bank or savings account?",
      elements: [{
        name: "accounts_held",
        isRequired: true,
        title: "I have a",
        type: "checkbox",
        choices: [{
            value: "bank_account",
            text: "Bank account"
          },
          {
            value: "savings_account",
            text: "Savings account"
          }
        ]
      }]
    },
    {
      name: "bank_account_in_credit",
      title: "Bank account",
      visibleIf: "{accounts_held} contains 'bank_account'",
      elements: [{
        name: "bank_account_in_credit",
        isRequired: true,
        title: "Is your bank account in credit?",
        type: "radiogroup",
        choices: [{
            value: "yes",
            text: "Yes"
          },
          {
            value: "no",
            text: "No"
          }
        ]
      }]
    },
    {
      name: "bank_account_credit_balance",
      title: "Bank account",
      visibleIf: "{accounts_held} contains 'bank_account' and {bank_account_in_credit} = 'yes'",
      elements: [{
        name: "bank_account_credit_balance",
        isRequired: true,
        title: "What is your bank balance?",
        type: "text"
      }]
    },
    {
      name: "bank_account_debit_balance",
      title: "Bank account",
      visibleIf: "{accounts_held} contains 'bank_account' and {bank_account_in_credit} = 'no'",
      elements: [{
        name: "bank_account_debit_balance",
        isRequired: true,
        title: "By how much are you overdrawn?",
        type: "text"
      }]
    },
    {
      name: "savings_account_details",
      title: "Savings account",
      visibleIf: "{accounts_held} contains 'savings_account'",
      elements: [{
        name: "savings_account_balance",
        isRequired: true,
        title: "How much is in your savings account?",
        type: "text"
      }]
    },
    {
      name: "property",
      title: "Property",
      elements: [{
        name: "accomodation_type",
        isRequired: true,
        title: "What type of property do you live in?",
        type: "radiogroup",
        choices: [{
            name: "own_property",
            value: "A property you own outright"
          },
          {
            name: "joint_property",
            value: "A property you own with someone else"
          },
          {
            name: "rented_property",
            value: "A property you rent"
          },
          {
            name: "lodgings_property",
            value: "Lodgings"
          },
          {
            name: "council_property",
            value: "Council property"
          }
        ]
      }]
    },
    {
      name: "income",
      title: "Income",
      elements: [{
          name: "monthly_income",
          title: "Please provide details of your monthly income",
          type: "multipletext",
          items: [{
              title: "Usual take home pay (including overtime, commission, bonuses etc.)",
              name: "take_home_pay"
            },
            {
              title: "Income support",
              name: "income_support"
            },
            {
              title: "Child benefit(s)",
              name: "child_benefits"
            },
            {
              title: "Other state benefit(s)",
              name: "other_benefits"
            },
            {
              title: "My pension(s)",
              name: "pension"
            },
            {
              title: "Others living in my home give me",
              name: "income_from_others"
            }
          ]
        },
        {
          name: "other_income",
          title: "Other monthly income",
          type: "matrixdynamic",
          addRowText: "Add another",
          cellType: "text",
          columns: [{
              name: "other_income_desc",
              title: "Description"
            },
            {
              name: "other_income_amount",
              title: "Monthly Amount"
            }
          ]
        },
        {
          name: "total_income",
          isRequired: true,
          title: "Total monthly income",
          type: "text"
        }
      ]
    },
    {
      name: "expenses",
      title: "Expenses",
      elements: [{
          name: "monthly_expenses",
          title: "Please provide details of your monthly expenses",
          type: "multipletext",
          items: [{
              title: "Mortgage (including second mortgage)",
              name: "mortgage"
            },
            {
              title: "Rent",
              name: "rent"
            },
            {
              title: "Council Tax",
              name: "council_tax"
            },
            {
              title: "Gas",
              name: "gas_bill"
            },
            {
              title: "Electricity",
              name: "electricity_bill"
            },
            {
              title: "Water charges",
              name: "water_bill"
            },
            {
              title: "TV rental & licence",
              name: "tv_licence"
            },
            {
              title: "Hire purchase repayments",
              name: "hp"
            },
            {
              title: "Mail order",
              name: "mail_order"
            },
            {
              title: "Housekeeping, food, school meals",
              name: "housekeeping"
            },
            {
              title: "Travelling expenses",
              name: "travelling_expenses"
            },
            {
              title: "Children’s clothing",
              name: "childrens_clothing"
            },
            {
              title: "Maintenance payments",
              name: "maintenance_payments"
            }
          ]
        },
        {
          name: "other_expenses",
          title: "Other monthly expenses",
          type: "matrixdynamic",
          addRowText: "Add another",
          cellType: "text",
          columns: [{
              name: "other_expense_desc",
              title: "Description"
            },
            {
              name: "other_expense_amount",
              title: "Monthly Amount"
            }
          ]
        },
        {
          name: "total_expenses",
          isRequired: true,
          title: "Total monthly expenses",
          type: "text"
        }
      ]
    },
    {
      name: "priority_debts",
      title: "Priority Debts",
      elements: [{
          type: "html",
          html: "<p>(This section is for arrears only. Do not include regular expenses listed earlier)</p>"
        },
        {
          name: "priority_debts",
          title: "",
          type: "multipletext",
          items: [{
              title: "Rent arrears",
              name: "rent_arrears"
            },
            {
              title: "Mortgage arrears",
              name: "mortgage_arrears"
            },
            {
              title: "Council Tax arrears",
              name: "council_tax_arrears"
            },
            {
              title: "Water charge arrears",
              name: "water_bill_arrears"
            },
            {
              title: "Gas arrears",
              name: "gas_bill_arrears"
            },
            {
              title: "Electricity arrears",
              name: "electricity_bill_arrears"
            },
            {
              title: "Other fuel debt arrears",
              name: "other_fuel_arrears"
            },
            {
              title: "Maintenance arrears",
              name: "maintenance_arrears"
            }
          ]
        },
        {
          name: "other_arrears",
          title: "Other arrears",
          type: "matrixdynamic",
          addRowText: "Add another",
          cellType: "text",
          columns: [{
              name: "other_arrears_desc",
              title: "Description"
            },
            {
              name: "other_arrears_amount",
              title: "Amount"
            }
          ]
        },
        {
          name: "total_arrears",
          isRequired: true,
          title: "Total arrears",
          type: "text"
        }
      ]
    },
    {
      name: "court_orders",
      title: "Court Orders",
      elements: [{
          name: "court_orders",
          title: "Court Orders",
          type: "matrixdynamic",
          addRowText: "Add another",
          choices: ["Week", "Month"],
          columns: [{
              name: "court",
              cellType: "text",
              title: "Court"
            },
            {
              name: "claim_number",
              cellType: "text",
              title: "Claim no."
            },
            {
              name: "order_amount",
              cellType: "text",
              title: "Amount (£)"
            },
            {
              name: "order_period",
              title: "Per"
            }
          ]
        },
        {
          name: "total_court_orders",
          isRequired: true,
          title: "Total court orders",
          type: "text"
        },
        {
          name: "court_orders_in_arrears",
          title: "List any of the payees above to whom you are behind in your payments",
          type: "comment"
        }
      ]
    },
    {
      name: "credit_debts",
      title: "Credit Debts",
      elements: [{
          name: "credit_debts",
          title: "Loans and credit card debts",
          type: "matrixdynamic",
          addRowText: "Add another",
          cellType: "text",
          columns: [{
              name: "credit_debt_desc",
              cellType: "text",
              title: "Description"
            },
            {
              name: "credit_debt_amount",
              cellType: "text",
              title: "Amount (£)"
            }
          ]
        },
        {
          name: "credit_debts_in_arrears",
          title: "List any of the above where you are behind in your payments",
          type: "comment"
        }
      ]
    },
    {
      name: "offer_of_payment",
      title: "Offer of payment",
      elements: [{
          type: "html",
          html: "<p>If you take away the totals of your expenses, debts and court orders, from your total income, you will get some idea of the sort of sum you should offer.</p><p>The offer you make should be one you can afford.</p>"
        },
        {
          name: "monthly_payment_offer",
          title: "How much can you pay per month?",
          type: "text"
        },
        {
          name: "enclosed_payment_offer",
          title: "If you are paying a lump sum now, please enter the amount",
          type: "text"
        },
        {
          name: "fee_amount",
          title: "Please enter the fee amount you are paying now",
          type: "text"
        }
      ]
    },
    {
      name: "declaration_of_truth",
      title: "Declaration",
      elements: [{
          name: "declaration_checkbox",
          isRequired: true,
          type: "checkbox",
          choices: [{
            value: "declaration_checkbox",
            text: "I declare that the details I have given are true to the best of my knowledge"
          }]
        },
        {
          name: "declaration_date",
          isRequired: true,
          text: "Date",
          type: "text",
          inputType: "date"
        }
      ]
    }
  ]
}