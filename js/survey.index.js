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

  const unclassedMap = {
    'sv_qstn textarea': 'form-control'
  }

  const updateUnclassedElements = e => {
    Object.keys(unclassedMap).forEach(classKey => {
      jQuery(`.${classKey}`).addClass(unclassedMap[classKey])
    })
  }

  const handleQuestionRender = (e, question) => {
    logger('handleQuestionRender', question)
    const $question = jQuery(question.htmlElement)
    const isRequired = question.question.isRequired
    $question.toggleClass('form-control-optional', !isRequired)
    updateUnclassedElements()
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
    const firstPage = jQuery('.sv_prev_btn').length === 0
    const $nextButton = jQuery('.sv_next_btn')
    const nextVal = firstPage ? surveyJSON.startSurveyText : surveyJSON.pageNextText
    $body.toggleClass('hasPrev', !firstPage)
    $nextButton.toggleClass('button-start', firstPage)
    $nextButton.val(nextVal)
  }

  const updateMultipleChoice = () => {
    const $multichoice = jQuery('.multiple-choice')
    $multichoice.each(function () {
      const $lbl = jQuery(this).find('label')
      const $inp = jQuery('input', $lbl)
      if ($inp.length) {
        let inpId = $inp.attr('id')
        if (!inpId) {
          inpId = $inp.closest('.form-group').attr('id') + $inp.val()
          $inp.attr('id', inpId)
        }
        $lbl.attr('for', inpId)
        $inp.prependTo($lbl.parent())
      }
    })
  }

  const updateControlErrors = () => {
    jQuery('.form-group').each(function () {
      const $formGroup = jQuery(this)
      const hasErrors = !!jQuery('.error-message', $formGroup).length
      $formGroup.toggleClass('form-group-error', hasErrors)
    })
  }

  setInterval(() => {
    updateControlErrors()
    setBackLink()
    updateMultipleChoice()
  }, 10)

})
