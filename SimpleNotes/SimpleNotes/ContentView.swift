import SwiftUI

struct ContentView: View {
    @StateObject private var store = NoteStore()
    @State private var path = NavigationPath()

    var body: some View {
        NavigationStack(path: $path) {
            Group {
                if store.notes.isEmpty {
                    emptyStateView
                } else {
                    noteListView
                }
            }
            .navigationTitle("記事本")
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button {
                        let note = store.addNote()
                        path.append(note.id)
                    } label: {
                        Image(systemName: "square.and.pencil")
                            .font(.system(size: 17, weight: .medium))
                    }
                }
                ToolbarItem(placement: .navigationBarLeading) {
                    if !store.notes.isEmpty {
                        EditButton()
                    }
                }
            }
            .navigationDestination(for: UUID.self) { noteID in
                NoteEditorView(noteID: noteID, store: store)
            }
        }
    }

    private var emptyStateView: some View {
        VStack(spacing: 16) {
            Image(systemName: "note.text")
                .font(.system(size: 64))
                .foregroundColor(.secondary)
            Text("還沒有記事")
                .font(.title2)
                .foregroundColor(.secondary)
            Text("點右上角的按鈕新增記事")
                .font(.subheadline)
                .foregroundColor(.secondary)
        }
    }

    private var noteListView: some View {
        List {
            ForEach(store.notes) { note in
                NavigationLink(value: note.id) {
                    NoteRowView(note: note)
                }
            }
            .onDelete(perform: store.deleteNotes)
        }
        .listStyle(.insetGrouped)
    }
}

struct NoteRowView: View {
    let note: Note

    private var dateText: String {
        let formatter = DateFormatter()
        formatter.locale = Locale(identifier: "zh_TW")
        let calendar = Calendar.current
        if calendar.isDateInToday(note.modifiedDate) {
            formatter.dateFormat = "HH:mm"
        } else if calendar.isDateInYesterday(note.modifiedDate) {
            return "昨天"
        } else {
            formatter.dateFormat = "MM/dd"
        }
        return formatter.string(from: note.modifiedDate)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 4) {
            Text(note.title.isEmpty ? "無標題" : note.title)
                .font(.headline)
                .lineLimit(1)
            HStack(spacing: 6) {
                Text(dateText)
                    .font(.caption)
                    .foregroundColor(.secondary)
                if !note.content.isEmpty {
                    Text("·")
                        .font(.caption)
                        .foregroundColor(.secondary)
                    Text(note.content)
                        .font(.caption)
                        .foregroundColor(.secondary)
                        .lineLimit(1)
                }
            }
        }
        .padding(.vertical, 2)
    }
}
