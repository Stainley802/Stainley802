import Foundation

class NoteStore: ObservableObject {
    @Published var notes: [Note] = []

    private var saveURL: URL {
        FileManager.default
            .urls(for: .documentDirectory, in: .userDomainMask)[0]
            .appendingPathComponent("notes.json")
    }

    init() {
        load()
    }

    func load() {
        guard let data = try? Data(contentsOf: saveURL),
              let decoded = try? JSONDecoder().decode([Note].self, from: data) else { return }
        notes = decoded
    }

    func save() {
        guard let data = try? JSONEncoder().encode(notes) else { return }
        try? data.write(to: saveURL, options: .atomicWrite)
    }

    func addNote() -> Note {
        let note = Note()
        notes.insert(note, at: 0)
        save()
        return note
    }

    func updateNote(_ note: Note) {
        guard let index = notes.firstIndex(where: { $0.id == note.id }) else { return }
        var updated = note
        updated.modifiedDate = Date()
        notes[index] = updated
        save()
    }

    func deleteNotes(at offsets: IndexSet) {
        notes.remove(atOffsets: offsets)
        save()
    }

    func deleteNote(id: UUID) {
        notes.removeAll { $0.id == id }
        save()
    }
}
