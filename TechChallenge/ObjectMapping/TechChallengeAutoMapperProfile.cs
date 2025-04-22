using AutoMapper;
using TechChallenge.Entities;
using TechChallenge.Entities.Books;
using TechChallenge.Services.Dtos.Books;
using TechChallenge.Services.Dtos.ContentEntries;

namespace TechChallenge.ObjectMapping;

public class TechChallengeAutoMapperProfile : Profile
{
    public TechChallengeAutoMapperProfile()
    {
        CreateMap<Book, BookDto>();
        CreateMap<CreateUpdateBookDto, Book>();
        CreateMap<BookDto, CreateUpdateBookDto>();

        CreateMap<ContentEntry, ContentEntryDto>();
        CreateMap<CreateUpdateContentEntryDto, ContentEntry>();
        CreateMap<ContentEntryDto, ContentEntry>();
        /* Create your AutoMapper object mappings here */
    }
}