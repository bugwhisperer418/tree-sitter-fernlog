; Header markers
(h1_marker) @keyword
(h2_marker) @keyword
(h3_marker) @keyword
(h4_marker) @keyword
(h5_marker) @keyword
(h6_marker) @keyword

;; Header content
(header_content) @title

;; Entry type markers - use different colors for different types
(todo) @punctuation.special
(feel) @type

;; Special markers
(emphasis) @error
(question) @info

;; Entries with emphasis marker (should be very visible)
(entry 
  mark: (emphasis)) @error
