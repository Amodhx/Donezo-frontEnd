class NoteModel {
    note_id:string
    note_title :string
    note_content :string
    image:File|null


    constructor(note_id: string, note_title: string, note_content: string, image: File | null) {
        this.note_id = note_id;
        this.note_title = note_title;
        this.note_content = note_content;
        this.image = image;
    }
}
export default NoteModel;