function sendDataToServer(survey) {
  console.log('sendDataToServer', survey.data)
  alert('survey sent')
}

function handleLoadSurvey(e) {
  console.log('handleLoadSurvey', e)
  /*$("#surveyContainer")
    .wrap('<main id="content" role="main">')
    .wrap('<div class="grid-row">')
    .wrap('<div class="column-full">')*/
}

function handlePageChange(e) {
  console.log('handlePageChange', e)
  return

  // add multiple-choice class to checkbox elements
  $('.sv_q_checkbox').addClass("multiple-choice")

  // move the input to before the label. this makes the checkboxes
  // look correct, but has some problems;
  //   - When the user checks the box, it reverts to the default
  //     appearance, and stays that way even if unchecked
  //   - The user has to click on the checkbox itself - clicking on
  //     the label does nothing
  $('.sv_q_checkbox').map(function () {
    var lbl = $(this).find('label')[0]
    var inp = $(lbl).find('input')[0]
    $(inp).remove()
    $(lbl).before(inp)
  })

}

function handleQuestionRender(e, question) {
  var $question = jQuery(question.htmlElement)
  // but it doesn't fire when errors change
  // var hasErrors = !!jQuery('.error-message', $question).length
  // var classMethod = hasErrors ? 'addClass' : 'removeClass'
  // $question[classMethod]('form-group-error')
}

$(function () {
  var survey = new Survey.Model(surveyJSON);

  $("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer,
    onAfterRenderPage: handlePageChange,
    onAfterRenderSurvey: handleLoadSurvey,
    onAfterRenderQuestion: handleQuestionRender
  });
})

var $body = jQuery('body')
function setBackLink() {
  var classMethod = jQuery('.sv_prev_btn').length ? 'addClass' : 'removeClass'
  $body[classMethod]('hasPrev')
}

setInterval(function() {
  jQuery('.form-group').each(function() {
    var $formGroup = jQuery(this)
    var hasErrors = !!jQuery('.error-message', $formGroup).length
    var classMethod = hasErrors ? 'addClass' : 'removeClass'
    $formGroup[classMethod]('form-group-error')
  })
  setBackLink()
}, 10)