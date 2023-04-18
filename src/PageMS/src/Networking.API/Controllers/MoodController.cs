using Core.Entities;
using Core.Requests;
using Core.Stores;
using Microsoft.AspNetCore.Mvc;

namespace Networking.API.Controllers;

[ApiController]
[Route("[controller]")]
public class MoodController : ControllerBase
{
    private readonly IMoodStore _moodStore;

    public MoodController(IMoodStore moodStore)
    {
        _moodStore = moodStore;
    }

    [HttpPost]
    [Route("create")]
    public async Task<ActionResult<Mood>> CreateMood([FromBody] CreateMoodRequest request)
    {

            var mood = new Mood(request);
            await _moodStore.CreateMood(mood);

            return CreatedAtAction("GetMoodById", new { id = mood.Id }, mood);

    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Mood>> GetMoodById(int id)
    {
        var mood = await _moodStore.GetMoodById(id);

        if (mood == null)
        {
            return NotFound();
        }

        return mood;
    }

    [HttpGet("moods")]
    public async Task<ActionResult<IEnumerable<Mood>>> GetMood(int id)
    {
        var mood = await _moodStore.GetMood();

        if (mood == null)
        {
            return NotFound();
        }

        return mood;
    }
}