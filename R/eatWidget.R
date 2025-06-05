#' What it does
#'
#' What it does
#'
#' @import htmlwidgets
#' @export
angle_chart <- function(angle, ..., fill, color, width = NULL, height = NULL) {
  content <- reactR::component(
    "AngleChart",
    list(angle = angle, width = width, height = height, fill = fill, color = color)
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'eatWidget',
    reactR::reactMarkup(content),
    width = width,
    height = height,
    package = 'eatWidget'
  )
}

#' @export
bar_chart <- function(frequency,
                      min = 0,
                      max = 1,
                      fill = "#94a3b8",
                      fill_background = "#e2e8f0",
                      ...,
                      width = NULL, height = NULL) {
  content <- reactR::component(
    "BarChart",
    list(frequency = frequency,
         min = min,
         max = max,
         fill = fill,
         fillBackground = fill_background,
         width = width, height = height)
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'eatWidget',
    reactR::reactMarkup(content),
    width = width,
    height = height,
    package = 'eatWidget'
  )
}

#' @export
error_chart <- function(est, se, global_est = NULL, global_se = NULL,
                        color = "#64748b", global_color = "#94a3b8",
                        fill = "#f1f5f9", global_fill = "#f1f5f9",
                        min = -3, max = 3, scale = 1,
                        ..., width = NULL, height = NULL) {
  content <- reactR::component(
    "ErrorChart",
    list(estimate = est, standardError = se,
         globalEstimate = global_est, globalStandardError = global_se,
         color = color, globalColor = global_color,
         fill =  fill, globalFill = global_fill,
         min = min, max = max,
         width = width, height = height, scale = scale)
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'eatWidget',
    reactR::reactMarkup(content),
    width = width,
    height = height,
    package = 'eatWidget'
  )
}

#' @export
range_chart <- function(est, est_max, est_min,
                        global_est = NULL, global_est_min = NULL, global_est_max = NULL,
                        color = "#64748b", global_color = "#94a3b8",
                        color_line = "#64748b", global_color_line = "#94a3b8",
                        fill = "#f1f5f9", global_fill = "#f1f5f9",
                        min = -3, max = 3, scale = 1,
                        ..., width = NULL, height = NULL) {
  content <- reactR::component(
    "RangeChart",
    list(estimate = est, estimateMin = est_min, estimateMax = est_max,
         globalEstimate = global_est, globalEstimateMin = global_est_min, globalEstimateMax = global_est_max,
         color = color, globalColor = global_color,
         colorLine = color_line, globalColorLine = global_color_line,
         fill =  fill, globalFill = global_fill,
         min = min, max = max,
         width = width, height = height, scale = scale)
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'eatWidget',
    reactR::reactMarkup(content),
    width = width,
    height = height,
    package = 'eatWidget'
  )
}

#' @export
geogebra <- function(data,
                     fill = "#94a3b8",
                     fill_background = "#e2e8f0",
                     ggb_width = 800,
                     ggb_height = 800,
                     id = "ggb",
                     ...,
                     width = NULL, height = NULL) {
  content <- reactR::component(
    "GeoGebra",
    list(data = data,
         fill = fill,
         ggbWidth = ggb_width,
         ggbHeight = ggb_height,
         fillBackground = fill_background,
         id = id)
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'eatWidget',
    reactR::reactMarkup(content),
    width = width,
    height = height,
    package = 'eatWidget'
  )
}

#' @export
geogebra_pure <- function(value,
                          ggb_width = 800,
                          ggb_height = 800,
                          id = "ggb",
                          ...,
                          width = NULL, height = NULL) {
  content <- reactR::component(
    "GeoGebraPure",
    list(value = value,
         ggbWidth = ggb_width,
         ggbHeight = ggb_height,
         id = id)
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'eatWidget',
    reactR::reactMarkup(content),
    width = width,
    height = height,
    package = 'eatWidget'
  )
}

#' @export
calculation <- function(data,
                        fill = "#f1f5f9",
                        fill_editable = "#fef3c7",
                        ...,
                        width = NULL, height = NULL) {
  content <- reactR::component(
    "Calculation",
    list(data = data,
         fill = fill,
         fillEditable = fill_editable)
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'eatWidget',
    reactR::reactMarkup(content),
    width = width,
    height = height,
    package = 'eatWidget'
  )
}

#' @export
coding_box <- function(data,
                       token,
                       fill = "#94a3b8",
                       fill_background = "#e2e8f0",
                       ...,
                       width = NULL, height = NULL) {
  content <- reactR::component(
    "CodingBox",
    list(data = data,
         fill = fill,
         fillBackground = fill_background,
         token = token)
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'eatWidget',
    reactR::reactMarkup(content),
    width = width,
    height = height,
    package = 'eatWidget'
  )
}



#' #' @export
#' sparklinesLine <- function(...) {
#'   reactR::React$SparklinesLine(...)
#' }
#'
#' #' @export
#' sparklinesSpots <- function(...) {
#'   reactR::React$SparklinesSpots(...)
#' }


#' Called by HTMLWidgets to produce the widget's root element.
#' @noRd
widget_html.eatWidget <- function(id, style, class, ...) {
  htmltools::tagList(
    # Necessary for RStudio viewer version < 1.2
    reactR::html_dependency_corejs(),
    reactR::html_dependency_react(),
    reactR::html_dependency_reacttools(),
    htmltools::tags$div(id = id, class = class, style = style)
  )
}

#' Shiny bindings for eatWidget
#'
#' Output and render functions for using eatWidget within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a sparklines
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name eatWidget-shiny
#'
#' @export
eatWidgetOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'eatWidget', width, height, package = 'eatWidget')
}

#' @rdname eatWidget-shiny
#' @export
renderEatWidget <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, eatWidgetOutput, env, quoted = TRUE)
}
