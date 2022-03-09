const baseSchema = {
  timestamps: {
    createdAt: "created_date",
    updatedAt: "updated_date",
  },
  skipVersioning: { dontVersionMe: true },
};
module.exports = baseSchema;