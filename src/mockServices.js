export const courseService = {
    getCourses: async () => [
        { id: 1, courseTitle: "Web Development Bootcamp" },
        { id: 2, courseTitle: "Data Science Fundamentals" },
        { id: 3, courseTitle: "UI/UX Design Masterclass" }
    ]
};

export const batchService = {
    getBatchesByCourseId: async (courseId) => [
        { id: 101, batchName: "Morning Batch - Jan 2025" },
        { id: 102, batchName: "Evening Batch - Feb 2025" }
    ]
};

export const enrollmentService = {
    getStudentsByBatch: async (batchId) => [
        { id: 1001, name: "Alice Smith" },
        { id: 1002, name: "Bob Johnson" },
        { id: 1003, name: "Charlie Brown" }
    ]
};
