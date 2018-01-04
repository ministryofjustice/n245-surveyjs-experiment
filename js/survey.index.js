jQuery(() => {
  surveyJSON = Object.assign({}, surveyJSONDefaults, surveyJSON)

  const logger = msg => {
    // console.log(msg)
  }
  const sendDataToServer = survey => {
    logger('sendDataToServer', survey.data)
  }

  const handleLoadSurvey = e => {
    logger('handleLoadSurvey')
  }

  const classMap = {
    sv_page_title: 'heading-large',
    sv_qstn: 'form-group',
    sv_q_title: 'form-label-bold',
    sv_q_text_root: 'form-control',
    sv_q_dropdown_control: 'form-control',
    'sv_qstn textarea': 'form-control',
    sv_q_erbox: 'error-message',
    sv_next_btn: 'button'
  }

  const updateElements = e => {
    Object.keys(classMap).forEach(classKey => {
      jQuery(`.${classKey}`).addClass(classMap[classKey])
    })
    
    return

    // add multiple-choice class to checkbox elements

    // move the input to before the label. this makes the checkboxes
    // look correct, but has some problems;
    //   - When the user checks the box, it reverts to the default
    //     appearance, and stays that way even if unchecked
    //   - The user has to click on the checkbox itself - clicking on
    //     the label does nothing

  }

  const handleAfterRenderPage = () => {
    logger('handleAfterRenderPage')
  }

  const handleCurrentPageChanged = () => {
    logger('handleCurrentPageChanged')
  }

  const handleQuestionRender = (e, question) => {
    logger('handleQuestionRender', question)
    const $question = jQuery(question.htmlElement)
    const isRequired = question.question.isRequired
    const classMethod = isRequired ? 'removeClass' : 'addClass'
    $question[classMethod]('form-control-optional')
    updateElements()
    // but it doesn't fire when errors change
    // const hasErrors = !!jQuery('.error-message', $question).length
    // const classMethod = hasErrors ? 'addClass' : 'removeClass'
    // $question[classMethod]('form-group-error')
  }

  const survey = new Survey.Model(surveyJSON);
  survey.registerFunctionOnPropertyValueChanged((...args) => {
    console.log(args)
  })

  jQuery("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer,
    onAfterRenderPage: handleAfterRenderPage,
    onCurrentPageChanged: handleCurrentPageChanged,
    onAfterRenderSurvey: handleLoadSurvey,
    onAfterRenderQuestion: handleQuestionRender
  });

  const $body = jQuery('body')
  const setBackLink = () => {
    const classMethod = jQuery('.sv_prev_btn').length ? 'addClass' : 'removeClass'
    $body[classMethod]('hasPrev')
  }

  const updateMultipleChoice = () => {
    jQuery('.sv_q_checkbox, .sv_q_radiogroup').addClass('multiple-choice')
    const $multichoice = jQuery('.multiple-choice')
    $multichoice.each(function() {
      const lbl = jQuery(this).find('label').get(0)
      const inp = jQuery(lbl).find('input').get(0)
      if (inp) {
        if (!inp.id) {
          inp.id = jQuery(inp).closest('.form-group').attr('id') + jQuery(inp).val()
        }
        jQuery(lbl).attr('for', inp.id)
        jQuery(inp).remove()
        jQuery(lbl).before(inp)
      }
    })
  } 

  setInterval(() => {
    // if (survey.isCurrentPageHasErrors) {
      jQuery('.sv_q_erbox').addClass('error-message')
      //jQuery('.sv_qstn').addClass('form-group')
      // jQuery('.sv_next_btn').addClass('button')
      jQuery('.form-group').each(function() {
        const $formGroup = jQuery(this)
        const hasErrors = !!jQuery('.error-message', $formGroup).length
        const classMethod = hasErrors ? 'addClass' : 'removeClass'
        $formGroup[classMethod]('form-group-error')
      })
    // }
    setBackLink()
    updateMultipleChoice()
  }, 10)

})