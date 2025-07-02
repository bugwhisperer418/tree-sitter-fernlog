import XCTest
import SwiftTreeSitter
import TreeSitterFern

final class TreeSitterFernTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_fern())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Fern grammar")
    }
}
