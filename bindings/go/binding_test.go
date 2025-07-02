package tree_sitter_fern_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_fern "git.sr.ht/~bugwhisperer/tree-sitter-fern/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_fern.Language())
	if language == nil {
		t.Errorf("Error loading Fern grammar")
	}
}
