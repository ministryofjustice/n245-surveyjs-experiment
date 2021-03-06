jQuery(() => {
  const $body = jQuery('body')

  const logger = msg => {
    // console.log(msg)
  }

  const getSurveyData = () => {
    return Object.assign({}, surveyJSONDefaults, surveyJSON)
  }

  const sendDataToServer = survey => {
    logger('sendDataToServer', survey.data)
  }

  const handleLoadSurvey = e => {
    logger('handleLoadSurvey')
  }

  const handleAfterRenderPage = () => {
    logger('handleAfterRenderPage')
    const firstPage = survey.currentPageNo === 0
    const $nextButton = jQuery('.sv_next_btn')
    const surveyData = getSurveyData()
    const nextButtonVal = firstPage ? surveyData.startSurveyText : surveyData.pageNextText
    $body.toggleClass('hasPrev', !firstPage)
    $nextButton.toggleClass('button-start', firstPage)
    $nextButton.val(nextButtonVal)
  }

  const handleCurrentPageChanged = survey => {
    logger('handleCurrentPageChanged')
  }

  const unclassedMap = {
    '.sv_qstn textarea': 'form-control'
  }

  const updateUnclassedElements = e => {
    Object.keys(unclassedMap).forEach(classKey => {
      jQuery(classKey).addClass(unclassedMap[classKey])
    })
  }

  const handleQuestionRender = (e, questionModel) => {
    logger('handleQuestionRender', questionModel)
    const $question = jQuery(questionModel.htmlElement)
    const isRequired = questionModel.question.isRequired
    $question.toggleClass('form-control-optional', !isRequired)
    updateUnclassedElements()
    // but it doesn't fire when errors change
    // so error updating on enclosing form-control element is in the updateControlErrors method
  }

  const updateMultipleChoice = () => {
    // No method to override structure for checkbox and radiogroup exists
    jQuery('.multiple-choice > label > input').each(function() {
      const $input = jQuery(this)
      const $label = $input.parent()
      // set inputId every time, otherwise surveyjs gets ids of elements out of sync on second pass
      const inputId = $input.attr('name') + $input.val()
      $input.attr('id', inputId)
      $label.attr('for', inputId)
      $input.prependTo($label.parent())
    })
  }

  const updateControlErrors = () => {
    // No equivalent to an onAfterRenderQuestionError event exists
    jQuery('.form-group').each(function () {
      const $formGroup = jQuery(this)
      const hasErrors = !!jQuery('.error-message', $formGroup).length
      $formGroup.toggleClass('form-group-error', hasErrors)
    })
  }

  const nonAPIUpdates = () => {
    updateControlErrors()
    updateMultipleChoice()
  }

  const survey = new Survey.Model(getSurveyData())

  jQuery("#surveyContainer").Survey({
    model: survey,
    css: getSurveyData().cssClasses,
    onComplete: sendDataToServer,
    onAfterRenderPage: handleAfterRenderPage,
    onCurrentPageChanged: handleCurrentPageChanged,
    onAfterRenderSurvey: handleLoadSurvey,
    onAfterRenderQuestion: handleQuestionRender
  })

  setInterval(nonAPIUpdates, 10)

})
