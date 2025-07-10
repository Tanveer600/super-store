namespace accountprojects.Models
{
    public class User
    {
    
            public int ID { get; set; }
            public string? Name { get; set; }
            public string? LoginName { get; set; }
            public string? LoginPwd { get; set; }
            public string? UserType { get; set; }
            public int? RoleID { get; set; }
            public DateTime? CreatedOn { get; set; }
            public bool? IsAdmin { get; set; }
        

    }
}
