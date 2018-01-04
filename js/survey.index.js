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

  const handleAfterRenderPage = () => {
    logger('handleAfterRenderPage')
  }

  const handleCurrentPageChanged = () => {
    logger('handleCurrentPageChanged')
  }

  const classMap = {
    'sv_qstn textarea': 'form-control'
  }

  const updateElements = e => {
    Object.keys(classMap).forEach(classKey => {
      jQuery(`.${classKey}`).addClass(classMap[classKey])
    })
  }

  const handleQuestionRender = (e, question) => {
    logger('handleQuestionRender', question)
    const $question = jQuery(question.htmlElement)
    const isRequired = question.question.isRequired
    const classMethod = isRequired ? 'removeClass' : 'addClass'
    $question[classMethod]('form-control-optional')
    updateElements()
    // but it doesn't fire when errors change
    // so error updating on enclosing form-control element is in the setInterval method
  }

  const survey = new Survey.Model(surveyJSON)

  jQuery("#surveyContainer").Survey({
    model: survey,
    css: surveyJSON.cssClasses,
    onComplete: sendDataToServer,
    onAfterRenderPage: handleAfterRenderPage,
    onCurrentPageChanged: handleCurrentPageChanged,
    onAfterRenderSurvey: handleLoadSurvey,
    onAfterRenderQuestion: handleQuestionRender
  })

  const $body = jQuery('body')
  const setBackLink = () => {
    const classMethod = jQuery('.sv_prev_btn').length ? 'addClass' : 'removeClass'
    $body[classMethod]('hasPrev')
  }

  const updateMultipleChoice = () => {
    const $multichoice = jQuery('.multiple-choice')
    $multichoice.each(function () {
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

  const updateControlErrors = () => {
    jQuery('.form-group').each(function () {
      const $formGroup = jQuery(this)
      const hasErrors = !!jQuery('.error-message', $formGroup).length
      const classMethod = hasErrors ? 'addClass' : 'removeClass'
      $formGroup[classMethod]('form-group-error')
    })
  }

  setInterval(() => {
    updateControlErrors()
    setBackLink()
    updateMultipleChoice()
  }, 10)

})
