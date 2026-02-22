import SwiftUI

struct NoteEditorView: View {
    let noteID: UUID
    @ObservedObject var store: NoteStore

    @State private var title: String = ""
    @State private var content: String = ""
    @FocusState private var titleFocused: Bool
    @FocusState private var contentFocused: Bool
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            TextField("標題", text: $title, axis: .vertical)
                .font(.title2.bold())
                .padding(.horizontal)
                .padding(.top, 16)
                .focused($titleFocused)
                .onChange(of: title) { newValue in
                    saveNote()
                }
                .submitLabel(.next)
                .onSubmit { contentFocused = true }

            Divider()
                .padding(.horizontal)
                .padding(.top, 12)

            TextEditor(text: $content)
                .font(.body)
                .focused($contentFocused)
                .padding(.horizontal, 12)
                .onChange(of: content) { newValue in
                    saveNote()
                }
        }
        .navigationBarTitleDisplayMode(.inline)
        .navigationBarBackButtonHidden(false)
        .onAppear {
            if let note = store.notes.first(where: { $0.id == noteID }) {
                title = note.title
                content = note.content
            }
            if title.isEmpty {
                titleFocused = true
            }
        }
        .onDisappear {
            if title.trimmingCharacters(in: .whitespaces).isEmpty &&
               content.trimmingCharacters(in: .whitespaces).isEmpty {
                store.deleteNote(id: noteID)
            }
        }
    }

    private func saveNote() {
        guard store.notes.contains(where: { $0.id == noteID }) else { return }
        var note = Note()
        note.id = noteID
        note.title = title
        note.content = content
        store.updateNote(note)
    }
}
