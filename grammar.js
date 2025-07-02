/**
 * @file Markdown-like parser for the Fern Journal Log notation
 * @author Andie Keller <andie@bugwhisperer.dev>
 * @license MIT
 */
module.exports = grammar({
  name: "fernlog",
  extras: (_) => ["\r", "\n"],
  rules: {
    document: $ => repeat($._block),
    _block: $ => choice(
      $.heading,
      $._blank_line
    ),

    _text: _ => /[^\n]/,
    _whitespace: _ => /[ \t]+/,
    _blank_line: $ => /\s*\n/,

    emphasis: _ => "!",
    question: _ => "?",
    todo: _ => "●",
    done: _ => "✔",
    cancelled: _ => "✖",
    moved: _ => choice("<", ">"),
    evnt: _ => "○",
    note: _ => "-",
    feel: _ => "❤",

    h1_marker: $ => /#[^#]/,
    h2_marker: $ => /##[^#]/,
    h3_marker: $ => /###[^#]/,
    h4_marker: $ => /####[^#]/,
    h5_marker: $ => /#####[^#]/,
    h6_marker: $ => /######/,
    header_content: $ => /[^\r\n]+/,

    heading: $ => choice(
      $.h1,
      $.h2,
      $.h3,
      $.h4,
      $.h5,
      $.h6
    ),

    h1: $ => seq(
      field('marker', $.h1_marker),
      optional(field('content', $.header_content)),
      repeat($._heading_content)
    ),

    h2: $ => seq(
      field('marker', $.h2_marker),
      optional(field('content', $.header_content)),
      repeat($._heading_content)
    ),

    h3: $ => seq(
      field('marker', $.h3_marker),
      optional(field('content', $.header_content)),
      repeat($._heading_content)
    ),

    h4: $ => seq(
      field('marker', $.h4_marker),
      optional(field('content', $.header_content)),
      repeat($._heading_content)
    ),

    h5: $ => seq(
      field('marker', $.h5_marker),
      optional(field('content', $.header_content)),
      repeat($._heading_content)
    ),

    h6: $ => seq(
      field('marker', $.h6_marker),
      optional(field('content', $.header_content)),
      repeat($._heading_content)
    ),

    _heading_content: $ => seq(optional(repeat($.entry)), "\n"),
    entry: $ => prec.left(seq(
      field("mark", optional(repeat1(choice($.emphasis, $.question)))),
      field("type", choice($.note, $.todo, $.feel, $.evnt, $.done, $.moved, $.cancelled)),
      repeat($._text),
      "\n",
      optional(repeat(seq($._whitespace, $.entry)))
    )),
  },
});
