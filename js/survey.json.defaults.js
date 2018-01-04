var surveyJSONDefaults = {
  showQuestionNumbers: "off",
  pagePrevText: "Back",
  pageNextText: "Continue",
  startSurveyText: "Start right now",
  requiredText: "",
  cssClasses: {
    navigation: {
      next: "sv_next_btn button",
      start: "sv_start_btn"
    },

    pageTitle: "sv_page_title heading-large",
    question: {
        mainRoot: "sv_q sv_qstn form-group",
        title: "sv_q_title form-label-bold"
    },
    error: {
      root: "sv_q_erbox error-message"
    },
    checkbox: {
        item: "sv_q_checkbox multiple-choice"
    },
    dropdown: {
        control: "sv_q_dropdown_control form-control"
    },
    matrixdynamic: {
        button: "sv_matrix_dynamic_button"
    },
    radiogroup: {
        item: "sv_q_radiogroup multiple-choice"
    },
    text: "sv_q_text_root form-control"
  }
}