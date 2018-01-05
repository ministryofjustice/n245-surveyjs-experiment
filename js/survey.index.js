jQuery(() => {

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

  const handleQuestionRender = (e, questionModel) => {
    logger('handleQuestionRender', questionModel)
    const $question = jQuery(questionModel.htmlElement)
    const isRequired = questionModel.question.isRequired
    $question.toggleClass('form-control-optional', !isRequired)
    updateUnclassedElements()
    // but it doesn't fire when errors change
    // so error updating on enclosing form-control element is in the setInterval method
  }

  const $body = jQuery('body')
  const updateNavigation = () => {
    const firstPage = jQuery('.sv_prev_btn').length === 0
    const $nextButton = jQuery('.sv_next_btn')
    const surveyData = getSurveyData()
    const nextButtonVal = firstPage ? surveyData.startSurveyText : surveyData.pageNextText
    $body.toggleClass('hasPrev', !firstPage)
    $nextButton.toggleClass('button-start', firstPage)
    $nextButton.val(nextButtonVal)
  }

  const updateMultipleChoice = () => {
    jQuery('.multiple-choice > label > input').each(function() {
      const $input = jQuery(this)
      const $label = $input.parent()
      let inputId = $input.attr('id')
      if (!inputId) {
        inputId = $input.closest('.form-group').attr('id') + $input.val()
        $input.attr('id', inputId)
      }
      $label.attr('for', inputId)
      $input.prependTo($label.parent())
    })
  }

  const updateControlErrors = () => {
    jQuery('.form-group').each(function () {
      const $formGroup = jQuery(this)
      const hasErrors = !!jQuery('.error-message', $formGroup).length
      $formGroup.toggleClass('form-group-error', hasErrors)
    })
  }

  const nonAPIUpdates = () => {
    updateNavigation()
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
