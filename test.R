tibble::tibble(
  x = seq(-3, 3, length.out = 181),
  y = x,
  x2 = seq(0, 1, length.out = 181),
  y2 = x2,
  z = seq(0, 180, length.out = 181)
) %>%
  reactable::reactable(columns = list(
    y = reactable::colDef(align = "left", width = 400,  cell = function(value, i) {
      # test(value, size = 40, height = "20px")
        error_chart(est = value, se = .3, , global_est = 1, global_se = .3, height = 20, width = "100%")
      # "tt"
    }),
    y2 = reactable::colDef(align = "left", width = 300, cell = function(value, i) {
      # test(value, size = 40, height = "20px")
      bar_chart(frequency = value, height = 20, width = 300)
      # "tt"
    }),
    z = reactable::colDef(align = "left", cell = function(value) {
      angle_chart(value, size = 40, height = "20px", width = "40px", color = "red", fill = "#ff0000aa")
    })
  ), defaultPageSize = 200, style = list(fontFamily = "Open Sans"))

test("test")

bar_chart(.4, width = 100, height = 10)
test(90, size = 500)

angle_chart(90, height = "100%", width = "100%", fill = "red" , color= "red")
error_chart(est = 0, se = 1, height = "100%", width = "100%")

# geogebra_pure(ggb)

ggb <- readLines("test/ggb.txt")
ggb2 <- readLines("test/ggbt2.txt")
dat <- purrr::map(1:10, function(x) list(list(id = "bertram", value = ggb2), list(id= "Bert", value = ggb))) %>%
  purrr::list_flatten()

test_tib <- tibble::tibble(
    login_name = "a64h43nk",
    login_code = "5cke",
    booklet_id = "THD027_2_TABLET_T2",
    unit_key = "D5_FN01",
    page = 3,
    n = 10
) %>%
  tidyr::uncount(weights = 2)
token <- "..." # Hier aktuellen Token einfügen

test <- test_tib %>%
  as.list() %>%
  purrr::list_transpose()
coding_box(data = test, token = token)

range_slider()
