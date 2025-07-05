/**
 * @file Markdown-like parser for the Fern Journal Log notation
 * @author Andie Keller <andie@bugwhisperer.dev>
 * @license MIT
 */
module.exports = grammar({
  name: "fernlog",
  extras: (_) => ["\r"],
  rules: {
    document: $ => repeat($._document_content),
    _document_content: $ => choice(
      $.h1_section,
      $.entry,
      $._blank_line
    ),

    // H1 sections can contain h2 sections and entries
    h1_section: $ => prec.right(seq(
      field('header', $.h1),
      field('content', repeat($._h1_content))
    )),
    _h1_content: $ => choice(
      $.h2_section,
      $.entry,
      $._blank_line
    ),

    // H2 sections can contain h3 sections and entries
    h2_section: $ => prec.right(seq(
      field('header', $.h2),
      field('content', repeat($._h2_content))
    )),
    _h2_content: $ => choice(
      $.h3_section,
      $.entry,
      $._blank_line
    ),

    // H3 sections can contain h4 sections and entries
    h3_section: $ => prec.right(seq(
      field('header', $.h3),
      field('content', repeat($._h3_content))
    )),
    _h3_content: $ => choice(
      $.h4_section,
      $.entry,
      $._blank_line
    ),

    // H4 sections can contain h5 sections and entries
    h4_section: $ => prec.right(seq(
      field('header', $.h4),
      field('content', repeat($._h4_content))
    )),
    _h4_content: $ => choice(
      $.h5_section,
      $.entry,
      $._blank_line
    ),

    // H5 sections can contain h6 sections and entries
    h5_section: $ => prec.right(seq(
      field('header', $.h5),
      field('content', repeat($._h5_content))
    )),
    _h5_content: $ => choice(
      $.h6_section,
      $.entry,
      $._blank_line
    ),

    // H6 sections can only contain entries (deepest level)
    h6_section: $ => prec.right(seq(
      field('header', $.h6),
      field('content', repeat($._h6_content))
    )),
    _h6_content: $ => choice(
      $.entry,
      $._blank_line
    ),

    // Terminal symbols
    _text: _ => /[^\r\n]+/,
    _whitespace: _ => /[ \t]+/,
    _blank_line: _ => /[ \t]*\n/,

    // Entry type markers
    emphasis: _ => "!",
    question: _ => "?",
    todo: _ => "●",
    done: _ => "✔",
    cancelled: _ => "✖",
    moved: _ => choice("<", ">"),
    evnt: _ => "○",
    note: _ => "-",
    feel: _ => "❤",

    // Header markers
    h1_marker: _ => "#",
    h2_marker: _ => "##",
    h3_marker: _ => "###",
    h4_marker: _ => "####",
    h5_marker: _ => "#####",
    h6_marker: _ => "######",
    header_content: _ => /[^\r\n]+/,

    // Individual heading definitions
    h1: $ => seq(
      field('marker', $.h1_marker),
      optional(field('text', $.header_content)),
      "\n"
    ),
    h2: $ => seq(
      field('marker', $.h2_marker),
      optional(field('text', $.header_content)),
      "\n"
    ),
    h3: $ => seq(
      field('marker', $.h3_marker),
      optional(field('text', $.header_content)),
      "\n"
    ),
    h4: $ => seq(
      field('marker', $.h4_marker),
      optional(field('text', $.header_content)),
      "\n"
    ),
    h5: $ => seq(
      field('marker', $.h5_marker),
      optional(field('text', $.header_content)),
      "\n"
    ),
    h6: $ => seq(
      field('marker', $.h6_marker),
      optional(field('text', $.header_content)),
      "\n"
    ),

    // Entry definitions
    entry: $ => prec.left(seq(
      field("mark", optional(repeat1(choice($.emphasis, $.question)))),
      field("type", choice($.note, $.todo, $.feel, $.evnt, $.done, $.moved, $.cancelled)),
      field("text", optional($._text)),
      "\n",
      field("children", optional(repeat(seq($._whitespace, $.entry))))
    )),
  },
});
