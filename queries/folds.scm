; Hierarchical folding for fernlog
; This creates "virtual" sections by folding from each header to the next header of same/higher level

; Fold from h1 to next h1 (or end of document)
(h1) @fold
; Fold from h2 to next h2/h1 (or end of document)
(h2) @fold
; Fold from h3 to next h3/h2/h1 (or end of document)
(h3) @fold
; Fold from h4 to next h4/h3/h2/h1 (or end of document)
(h4) @fold
; Fold from h5 to next h5/h4/h3/h2/h1 (or end of document)
(h5) @fold
; Fold from h6 to next h6/h5/h4/h3/h2/h1 (or end of document)
(h6) @fold

; Fold nested entries
(entry (children) @fold)
