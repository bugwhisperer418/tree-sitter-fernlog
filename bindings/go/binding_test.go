package tree_sitter_fernlog_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_fernlog "git.sr.ht/~bugwhisperer/tree-sitter-fernlog/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_fernlog.Language())
	if language == nil {
		t.Errorf("Error loading Fernlog grammar")
	}
}
