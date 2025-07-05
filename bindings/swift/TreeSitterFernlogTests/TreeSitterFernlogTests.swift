import XCTest
import SwiftTreeSitter
import TreeSitterFernlog

final class TreeSitterFernlogTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_fernlog())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Fernlog grammar")
    }
}
